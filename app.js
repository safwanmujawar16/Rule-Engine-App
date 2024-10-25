const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add CORS middleware
const ruleRoutes = require('./routes/ruleRoutes');
const db = require('./config/db');

const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

db();  // Initialize MongoDB connection

app.use('/api/rules', ruleRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
