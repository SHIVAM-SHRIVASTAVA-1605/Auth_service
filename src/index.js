const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');

// const UserService = require('./services/user-service');

const app = express();

const prepareAndStartserver = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'shivam@gmail.com', id: 1});
        // console.log("new token is", newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhbUBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzQ5ODAwNTIxLCJleHAiOjE3NDk4MDQxMjF9.mKsOwNrypxz6NDaVPZ0VDjk_G1CNTumBMo8sGqienRM';
        // const resposne = service.verifyToken(token);
        // console.log(resposne);
    });
}

prepareAndStartserver();