const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');
const {User, Role} = require('./models/index');

const app = express();

const prepareAndStartserver = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

        const u1 = await User.findByPk(4);
        const r1 = await Role.findByPk(3);
        // u1.addRole(r1);
        const response = await u1.hasRole(r1);
        console.log(response);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'shivam@gmail.com', id: 1});
        // console.log("new token is", newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhbUBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzQ5ODAwNTIxLCJleHAiOjE3NDk4MDQxMjF9.mKsOwNrypxz6NDaVPZ0VDjk_G1CNTumBMo8sGqienRM';
        // const resposne = service.verifyToken(token);
        // console.log(resposne);
    });
}

prepareAndStartserver();