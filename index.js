'use strict';
const express = require('express');
const app = express();
const port = 2021;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./dbconnection');
// const SignupRoutes = require('./Routes/Signup');
const SigninRoutes = require('./Routes/Signin');
const ForgotRoutes = require('./Routes/Forgotpassword');
const ChangepassRoutes = require('./Routes/changepassword');
const UserRoutes = require('./Routes/users');
const timerRoutes = require('./Routes/timers');
const leaveRoutes = require('./Routes/leave');


UserRoutes(app);
SigninRoutes(app);
ForgotRoutes(app);
ChangepassRoutes(app);



// app.use((req, res, next) => {

// 	console.log(req.headers);
// 	const token =  req.headers.authorization;
// 	console.log(token);
// 	jwt.verify(token, '54321', (err, decodedtoken) => {
// 		if(decodedtoken) {
// 			console.log(decodedtoken);
// 			next()
// 		}
// 		else {
// 			const error = new Error('token is not matching');
// 			console.log(error);
// 			return res.status(400).json('token is not received from fronend');
// 		}

// 	})
// })

// SignupRoutes(app);

timerRoutes(app);
leaveRoutes(app);
// leaveapprovedRoutes(app);




app.use((error, req, res, next) => {
    console.error(error);
    res.status(400).json({ message: error.message });
})


app.listen(port, () => {
    console.log('server is started at 2021');
})