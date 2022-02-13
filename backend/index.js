const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(port, () => {
            console.log(`| START | Server is running on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
