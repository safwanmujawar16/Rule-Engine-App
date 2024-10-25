function createAST(ruleString) {
    const trimmedRule = ruleString.trim();
  
    // A simple regex-based tokenizer
    // const tokens = trimmedRule.match(/(\w+ [><=]=? '.*?'|\w+ [><=] \d+|AND|OR|\(|\))/g);
    const tokens = trimmedRule.match(
      /(\w+ [><=]=? '.*?'|\w+ [><=] \d+|AND|OR|\(|\))/g
    );
  
    const outputQueue = [];
    const operatorStack = [];
  
    const precedence = {
      OR: 1,
      AND: 2,
    };
  
    const createNode = (token) => {
      const parts = token.split(" ");
      const field = parts[0].trim();
      const operator = parts[1].trim();
      const value = parts[2] ? parts[2].replace(/'/g, "") : null;
      return {
        type: "operand",
        field: field,
        operator: operator,
        value: isNaN(value) ? value : Number(value),
      };
    };
  
    tokens.forEach((token) => {
      if (token === "AND" || token === "OR") {
        while (
          operatorStack.length &&
          precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
        ) {
          const right = outputQueue.pop();
          const left = outputQueue.pop();
          outputQueue.push({
            type: "operator",
            value: operatorStack.pop(),
            left: left,
            right: right,
          });
        }
        operatorStack.push(token);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (
          operatorStack.length &&
          operatorStack[operatorStack.length - 1] !== "("
        ) {
          const right = outputQueue.pop();
          const left = outputQueue.pop();
          outputQueue.push({
            type: "operator",
            value: operatorStack.pop(),
            left: left,
            right: right,
          });
        }
        operatorStack.pop(); // Remove the '(' from the stack
      } else {
        outputQueue.push(createNode(token));
      }
    });
  
    // Pop remaining operators in the stack
    while (operatorStack.length) {
      const right = outputQueue.pop();
      const left = outputQueue.pop();
      outputQueue.push({
        type: "operator",
        value: operatorStack.pop(),
        left: left,
        right: right,
      });
    }
  
    return outputQueue[0];
  }
  
  // // Function to combine multiple ASTs into one
  // function combineAST(rules) {
  //     if (rules.length === 0) return null;
  
  //     // Start with the first AST
  //     let combinedAST = rules[0];
  
  //     // Combine the remaining ASTs
  //     for (let i = 1; i < rules.length; i++) {
  //         const currentAST = rules[i];
  
  //         // Logic to decide whether to combine using AND or OR
  //         // For example, you can customize this logic based on your requirements
  //         if (combinedAST.value === 'AND' && currentAST.value === 'AND') {
  //             // If both are AND, you might want to combine them with OR
  //             combinedAST = {
  //                 type: 'operator',
  //                 left: combinedAST,
  //                 right: currentAST,
  //                 value: 'OR'
  //             };
  //         } else {
  //             // Default behavior is to combine using AND
  //             combinedAST = {
  //                 type: 'operator',
  //                 left: combinedAST,
  //                - right: currentAST,
  //                 value: 'AND'
  //             };
  //         }
  //     }
  
  //     return combinedAST;
  // }
  
  function combineAST(rules) {
    if (rules.length === 0) return null;
  
    // Start with the first AST
    let combinedAST = rules[0];
  
    // Combine the remaining ASTs
    for (let i = 1; i < rules.length; i++) {
      const currentAST = rules[i];
  
      // Determine how to combine based on your specific requirements
      // You can customize this logic further based on your rule types
      const operator =
        combinedAST.value === "OR" || currentAST.value === "OR" ? "OR" : "AND";
  
      combinedAST = {
        type: "operator",
        left: combinedAST,
        right: currentAST,
        value: operator,
      };
    }
  
    return combinedAST;
  }
  
  // Function to evaluate AST against provided data
  function evaluateAST(ast, data) {
    if (!ast) {
      throw new Error("AST node is undefined");
    }
    console.log("Evaluating AST Node: ", JSON.stringify(ast, null, 2));
    if (ast.type === "operator") {
      const leftEval = evaluateAST(ast.left, data);
      const rightEval = evaluateAST(ast.right, data);
      return ast.value === "AND" ? leftEval && rightEval : leftEval || rightEval;
    }
    if (ast.type === "operand") {
      switch (ast.operator) {
        case ">":
          return data[ast.field] > ast.value;
        case "<":
          return data[ast.field] < ast.value;
        case "=":
          return data[ast.field] === ast.value;
        default:
          return false;
      }
    }
    return false;
  }
  
  // function evaluateAST(node, data) {
  //   if (!node) {
  //     console.error("Undefined AST node:", node); // Log the undefined node
  //     throw new Error("AST node is undefined");
  //   }
  
  //   switch (node.type) {
  //     case "operator":
  //       if (!node.value) {
  //         throw new Error("Operator value is undefined");
  //       }
  //       switch (node.value) {
  //         case "AND":
  //           return evaluateAST(node.left, data) && evaluateAST(node.right, data);
  //         case "OR":
  //           return evaluateAST(node.left, data) || evaluateAST(node.right, data);
  //         default:
  //           throw new Error(Unknown operator: ${node.value});
  //       }
  //     case "operand":
  //       if (!node.field || !node.operator) {
  //         throw new Error("Operand field or operator is undefined");
  //       }
  //       const { field, operator, value } = node;
  //       switch (operator) {
  //         case ">":
  //           return data[field] > value;
  //         case "<":
  //           return data[field] < value;
  //         case "=":
  //           return data[field] === value;
  //         // Add more cases as needed for different operators
  //         default:
  //           throw new Error(Unknown operator: ${operator});
  //       }
  //     default:
  //       throw new Error(Unknown node type: ${node.type});
  //   }
  // }
  
  module.exports = { createAST, combineAST, evaluateAST };