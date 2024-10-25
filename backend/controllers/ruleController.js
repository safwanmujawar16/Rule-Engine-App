const Rule = require('../models/ruleModel');
const { createAST, combineAST, evaluateAST } = require('../utils/astHelper');

// Create a new rule
exports.createRule = async (req, res) => {
    console.log('Request received:', req.body);
    try {
        const { ruleString } = req.body;
        const ast = createAST(ruleString);
        console.log('Generated AST:', JSON.stringify(ast, null, 2));
        const rule = new Rule({ ruleString, ast });
        await rule.save();
        res.status(201).json(rule);
    } catch (error) {
        console.error('Error creating rule:', error); // Log the error
        res.status(500).json({ message: 'Error creating rule', error: error.message });
    }
};

// Combine multiple rules
exports.combineRules = async (req, res) => {
    try {
        const { ruleIds } = req.body;
        const rules = await Rule.find({ _id: { $in: ruleIds } });
        const combinedAST = combineAST(rules.map(r => r.ast));
        res.json(combinedAST);
    } catch (error) {
        res.status(500).json({ message: 'Error combining rules', error });
    }
};

// Evaluate a rule
exports.evaluateRule = async (req, res) => {
    try {
        const { ruleId, data } = req.body;
        if (!ruleId || !data) {
            return res.status(400).json({ message: 'Rule ID and data are required.' });
        }

        const rule = await Rule.findById(ruleId);
        if (!rule) {
            return res.status(404).json({ message: 'Rule not found.' });
        }

        console.log('AST:', JSON.stringify(rule.ast, null, 2)); 
        const result = evaluateAST(rule.ast, data);
        res.json({ result });
    } catch (error) {
        console.error('Error evaluating rule:', error); // Log the error to the console
        res.status(500).json({ message: 'Error evaluating rule', error: error.message }); // Return the error message
    }
};