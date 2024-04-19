'use strict';

const User = require('../Models/user');
const myfun = require('../helper/otp');
const passwordserv = require('../helper/password');

module.exports = function (app) {

    app.post('/forgot', async (req, res, next) => {
        const { Email } = req.body;
        try {
            const data = await User.findOne({ Email });
            if (!data) {
                const error = new Error('Mail Doesnt exist')
                return next(error);
            }
            const x = (Math.random() * Date.now() * 1000).toString().slice(0, 8);
            const result = await User.findOneAndUpdate({ Email }, { Otp: x }, { new: true });
            res.json(result);
            const OTP = result.Otp;
            console.log(OTP);
            myfun(OTP, Email);
        }

        catch (error) {
            next(error);
        }
    })

    /**resetPassword */

    app.post('/reset', async (req, res, next) => {

        const { Otp, Password } = req.body;
        console.log(Otp, Password);
        try {

            const data = await User.findOne({ Otp });
            if (!data) {
                const error = new Error('OTP is not matching');
                res.status(400).json({ message: error.message });
            }
            const hash = await passwordserv.hash(Password);
            req.body.Password = hash;
            const info = req.body;
            console.log(info);
            const result = await User.findOneAndUpdate({ Otp }, info, { new: true });
            res.json(result);

        }
        catch (error) {
            next(error);
        }

    })
}