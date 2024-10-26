<h1 align="center">Rule Engine Project</h1>

<p align="center">
   This project demonstrates a 3-tier rule engine application using JavaScript, Node.js, Express.js and MongoDB to build and evaluate rule-based conditions based on user eligibility.
</p>

<h2>🚀 Features</h2>
<ul>
    <li>Convert rule strings into Abstract Syntax Trees (AST) for structured processing.</li>
    <li>Combine multiple ASTs into a single representation.</li>
    <li>Evaluate rules based on user-defined json data.</li>
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

<h2>📝 How To Run </h2>
<ol>
    <li><strong>Clone Repository:</strong> Clone this repository from GitHub.</li>
    <li><strong>Install Dependencies:</strong> Run <code>npm install</code> to install project dependencies.</li>
    <li>Before running the program, setup your MongoDB Atlas account and paste your connection string in the MONGO_URI in .env file</li>
    <li><strong>Start Server:</strong> Use <code>npm run start</code> to start the server.</li>
    <li><strong>Test Endpoints:</strong> Use a tool like Postman to test rule creation, combination, and evaluation.</li>
    <li> Instructions To Run: https://scribehow.com/shared/Creating_and_Evaluating_Rules_in_the_Rule_Engine__9WmAMtjEQnq--7kr48VAsQ </li>
</ol>

<h1>AST Structure Stored in MongoDB Atlas</h1>

![Screenshot 2024-10-26 165131](https://github.com/user-attachments/assets/f7781605-f9af-4840-bd47-bda7b767ec2e)

<h2>📂 API Endpoints</h2>
<ul>
     <li><strong>Create Rule:</strong> <code>POST /api/rules/create</code> - Create a new rule with ruleString.</li>
    <li><strong>Combine Rules:</strong> <code>POST /api/rules/combine</code> - Combine multiple rules by ID.</li>
    <li><strong>Evaluate Rule:</strong> <code>POST /api/rules/evaluate</code> - Evaluate a rule with specified json data.</li>
</ul>

<h2>📜 Example Payloads</h2>

![WhatsApp Image 2024-10-26 at 16 21 15_bf990028](https://github.com/user-attachments/assets/9a7ee4ca-ce51-46e9-873b-64716fafeb3c)

</body>
</html>
