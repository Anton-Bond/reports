const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require('./routes/userRouter');
// const authRoutes = require('./routes/authRouter');
// const tableRoutes = require('./routes/tableRouter');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(require('cors')());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// ===================== ROUTES ====================
app.use('/api/user', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/table', tableRoutes);
// =================== END ROUTES ==================

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
