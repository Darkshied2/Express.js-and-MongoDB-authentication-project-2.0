'use strict';
const { User } = require('../Models')
const passwordserv = require('../helper/password');


module.exports = function (app) {
    app.post('/update', async (req, res, next) => {
        const { Email, Password } = req.body;
        // console.log(Email, Password);
        try {
            const data = await User.findOne({ Email })
            if (!data) {
                const error = new Error('Email is doesnt exist');
                return next(error)
            }
            const hash = await passwordserv.hash(Password);
            req.body.Password = hash;
            const info = req.body;
            const result = await User.findOneAndUpdate({ Email }, info, { new: true });
            res.json(result);

        }
        catch (error) {
            next(error);
        }


    })
}



