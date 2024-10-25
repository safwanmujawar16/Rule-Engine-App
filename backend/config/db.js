const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://safwanmujawar16:mypassword@rule-engine.rqip4.mongodb.net/?retryWrites=true&w=majority&appName=rule-engine');  // No deprecated options
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
