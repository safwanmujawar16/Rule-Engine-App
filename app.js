const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const path = require('path'); // Add path module
const ruleRoutes = require('./backend/routes/ruleRoutes');
const db = require('./backend/config/db');

const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Initialize MongoDB connection
db();

app.use('/api/rules', ruleRoutes);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Route for serving index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
