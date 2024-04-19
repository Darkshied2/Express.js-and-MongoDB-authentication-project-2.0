'use strict';

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const mailer = require('../helper/mailer');


const {
    User,
} = require('../Models');

const passwordserv = require('../helper/password');

function generatePassword() {
    return (Math.random() * Date.now() * 10000).toString().slice(0, 8);
}

module.exports = function (app) {

    app.post('/users', async (req, res, next) => {

        const to = req.body.Email;
        // console.log(to);
        const subject = 'AutoGenerated Mail from Portal '
        // console.log(subject);
        const data = req.body;
        // console.log(data);
        const Password = req.body.password || generatePassword();

        try {
            const hashPass = await passwordserv.hash(Password)
            const data = req.body || {};
            data.Password = hashPass;
            const data1 = await User.count({});
            console.log(data1);
            const x = data1;
            console.log(x);
         // employee code generating here..
            function myfun(m) {

             if(m==0) {
                const code = 12345;
                data.employeeId = code;
             }
             else if(m< 100) {
                const code = 12345;
                const codes = code+m;
                data.employeeId = codes;
             }

             else {
                console.log('error');
             }
            }
            myfun(x)


            const user = new User(data);
            const result = await user.save(); 

            // console.log(result);
            const employeeId = result.employeeId;
            mailer.sendMailForNewEmployee(to, Password, employeeId);
            res.json(result);
            // console.log(Password, subject);
        } catch (error) {
            next(error)
        }

    })


    //  to retrieve user information

    app.get('/users', async (req, res, next) => {

        try {
            const result = await User.find({});
            res.json(result);
        } catch (error) {
            next(error)
        }

    });



    app.get('/users/:id', async (req, res, next) => {
        const id = req.params.id;

        try {

            const result = await User.findById(id)
            res.json(result);

        }

        catch (error) {
            next(error)
        }
    });

    // users list 

   //  app.get('/userslist', async (req, res, next) => {

   // const data = await User.find({})
   // try {
   //      res.json(data)

   // }
   //   catch(error) {
   //      next(error)
   //   }
     
   //  })

    // to update user information

    app.put('/users/:id', upload.single('file'), (req, res, next) => {

        const id = req.params.id;
        const data = req.body;

        User.findByIdAndUpdate(id, data, { new: true })
            .then((result) => {
                res.json(result)
            })
            .catch(next)
    })
    // to delete user information 

    app.delete('/users/:id', async (req, res, next) => {

        const id = req.params.id;
        try {
            const result = await User.findByIdAndDelete(id);
            res.json(result);
        }
        catch (error) {
            next(error)
        }

    })
}