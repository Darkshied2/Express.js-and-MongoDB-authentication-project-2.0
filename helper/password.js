'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function hash(pass) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(pass, 8, (error, hash) => {
            if (error) {
                return reject(error);
            }
            resolve(hash);
        });
    });
};


function verify(hash, pass) {

    console.log(pass, hash)

    return new Promise((resolve, reject) => {

        bcrypt.compare(hash, pass, (error, res) => {
            if (error) {
                return reject(error);
            }

            resolve(res);
        });

    });
};

function token(data) {
console.log(data)
    return new Promise((resolve, reject) => {

        jwt.sign(data, '54321', { expiresIn: 60 * 60 }, (error, res) => {
            if(error) {

                return reject(error);
            }
console.log(res)
            resolve(res);

        })
    })
}

// jwt verify..

// function tokenverify(token) {
//     // console.log(token);
//     if(token) {

//         console.log(token);

//         return new Promise((resolve, reject) => {

//     jwt.verify(token, '54321', ( error, res) => {

//         if(error) {
//          reject('decodedtoken is not available');
//       }
//         resolve(res);
//     })
//     })
       
//     }

    
// }

module.exports = { hash, verify, token};