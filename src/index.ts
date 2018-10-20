
require('dotenv').load();
import express = require('express');
import Middlewares = require('./config/middlewares/base/MiddlewaresBase');

const app = express();

const port = process.env.PORT || 5000;

app.set('port', port);
app.use(Middlewares.configuration);

app.listen(port, () => {
    console.log('Node app is running at localhost:' + port);
});
