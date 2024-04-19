// 'use strict';
// const UserSchema = require('../Models/user');
// const PasswordServ = require('../helper/password');
// module.exports = function (app) {

//     app.post('/reset', (req, res) => {

//         const { Email, Otp, Password } = req.body;
//         let user;
//         UserSchema.findOne({ Email })
//             .then((result) => {
//                 user = result;
//                 if (!user) {
//                     throw new Error('User Not Found');
//                 }

//                 if (user.Otp !== Otp) {
//                     throw new Error('Otp Not Matching..');
//                 }

//                 return PasswordServ.hash(Password)
//             })
//             .then(hash => {
//                 user.Otp = null; 
//                 user.Password = hash;
//                 return user.save();
//             })
//             .then(() => {
//                 res.json({ message: 'Success' });
//             })
//             .catch((next) => {
//             })

//     })
// }