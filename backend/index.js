const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(port, process.env.HOST, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
