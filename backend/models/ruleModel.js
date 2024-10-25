const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
    ruleString: { type: String, required: true },
    ast: { type: Object, required: true },  // Store the AST as a JSON object
});

module.exports = mongoose.model('Rule', RuleSchema);
