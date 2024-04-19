'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'mohanbabu1013@gmail.com',
        pass: 'welcome@2'
    }
})

        
function send(to, html, subject) {
    return new Promise((resolve, reject) => {
        const from = 'mohanbabu1013@gmail.com';
        
        if (!to) {
            const error = new Error('Sould Provide Atleast One To Address to Send Email');
            return reject(error)
        }

        if(!html) {
            const error = new Error('should Provide data on here ')
        }
        const mailOptions = {
            from,
            to,
            subject: subject || 'Support Mail From Attendance Portal',
            html
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log(error)
            }
            else {
                console.log(info);
                res.json(info);
            }
        
        })
    })
}

function mailContent(to, Password, employeeId ) {
     return `<div style="border: 2px solid red; border-radius: 25px; padding: 10px; width: 30%; text-align: center;margin: auto;">
            <div><img src="https://media.licdn.com/dms/image/C510BAQEh3iA0mRxaxw/company-logo_200_200/0?e=2159024400&v=beta&t=wbwLYuPPyhsoEqSMLYUH689AcY5znqoItDkUPfCUVm8" width="40%"></div>
    
            <h2>Hi Mohanbabu</h2>
            <h3>Welcome To The Anram Solutions</h3>
            <p style>Thank You For Created an Account in Anram Solutions</p>
            <h3 style>Here You Can Find Your Login Details</h3>
            <p><strong>UserName:</strong>${to}</p>
            <p><strong>Password:</strong>${Password}</p>
            <p><strong>employeeId :</strong>${employeeId }</p>
            <p style><strong>Note:</strong>Please Contact To HR Team Any Further Enquiry</p>
        </div>`;
}

function sendMailForNewEmployee(to, Password, employeeId ) {
   const body = mailContent(to, Password, employeeId );
   send(to, body, 'Welcome To Anram Solutions PVT LTD');
}
// mailer('mohaneie88@gmail.com', 'welcome@1');

module.exports = { send, mailContent, sendMailForNewEmployee };