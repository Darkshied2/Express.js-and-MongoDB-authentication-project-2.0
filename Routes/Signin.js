'use strict';
const { User } = require('../Models');
const Passwordserv = require('../helper/password');

module.exports = function (app) {

    app.post('/getin', async (req, res, next) => {

        const { Email, Password } = req.body;

        let document = {};
        try {
            const data = await User.findOne({ Email })
            if (!data) {
                const error = new Error('email is not found');
                return next(error);
            }
            console.log(data, 'data')
            console.log(data.userRole, 'emplo')
            const {_id: id, employeeId, userRole } = data;
            // console.log(id, employeeId, userRole );
            const result = await Passwordserv.verify(Password, data.Password);
            if (!result) {
                return res.status(400).json({ message: 'password is not matching' })

            }
            const tokengen = await Passwordserv.token({id, employeeId, userRole  });
            // console.log(tokengen)
            res.json({token: tokengen});

        }
        catch (error) {
            next(error);
        }
       
    })

  app.get('/getid/:id', async (req, res, next) => {

    const id = req.params.id;
   try {

     const data = await User.findById(id);

     res.json(data);
       
   }

   catch(error) {

    next(error)

   }
  })
}
