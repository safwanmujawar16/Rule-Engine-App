<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rule Engine Project README</title>
</head>
<body>

<h1 align="center">Rule Engine Project</h1>

<p align="center">
    This project demonstrates a rule engine application using JavaScript, Node.js, and MongoDB to build and evaluate rule-based conditions.
</p>

<h2>🚀 Features</h2>
<ul>
    <li>Convert rule strings into Abstract Syntax Trees (AST) for structured processing.</li>
    <li>Combine multiple ASTs into a single representation.</li>
    <li>Evaluate rules based on user-defined data.</li>
</ul>

<h2>🔧 Tech Stack</h2>
<ul>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="20" height="20">
        <strong>JavaScript:</strong> For AST creation, combining, and rule evaluation functions.
    </li>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="20" height="20">
        <strong>Node.js:</strong> Backend framework for API handling and business logic processing.
    </li>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js" width="20" height="20">
        <strong>Express.js:</strong> Simplifies routing and server management.
    </li>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="20" height="20">
        <strong>MongoDB:</strong> Database to store rule structures and evaluate rules.
    </li>
</ul>

<h2>📝 Usage</h2>
<ol>
    <li><strong>Clone Repository:</strong> Clone this repository from GitHub.</li>
    <li><strong>Install Dependencies:</strong> Run <code>npm install</code> to install project dependencies.</li>
    <li><strong>Start Server:</strong> Use <code>npm start</code> to start the server.</li>
    <li><strong>Test Endpoints:</strong> Use a tool like Postman to test rule creation, combination, and evaluation.</li>
</ol>

<h2>📂 API Endpoints</h2>
<ul>
    <li><strong>Create Rule:</strong> <code>POST /api/rules</code> - Create a new rule with ruleString.</li>
    <li><strong>Combine Rules:</strong> <code>POST /api/rules/combine</code> - Combine multiple rules by ID.</li>
    <li><strong>Evaluate Rule:</strong> <code>POST /api/rules/evaluate</code> - Evaluate a rule with specified data.</li>
</ul>

<h2>📜 Example Payloads</h2>
<h3>Create Rule</h3>
<pre><code>{
  "ruleString": "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"
}</code></pre>

<h3>Evaluate Rule</h3>
<pre><code>{
  "ruleId": "YOUR_RULE_ID",
  "data": {
    "age": 35,
    "department": "Sales",
    "salary": 60000,
    "experience": 3
  }
}</code></pre>

<h2>🎓 License</h2>
<p>This project is licensed under the MIT License.</p>

</body>
</html>
