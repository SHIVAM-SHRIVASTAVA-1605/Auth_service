const express = require('express');

const { PORT } = require('./config/serverConfig');

const app = express();

const prepareAndStartserver = () => {

    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
    });
}

prepareAndStartserver();