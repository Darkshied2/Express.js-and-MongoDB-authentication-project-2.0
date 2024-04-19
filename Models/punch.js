'use strict';
const mongoose = require('mongoose');
const Timer = mongoose.Schema({
    employeeId: {type: String}, 
    startTime: {type: Date, default: Date.now},
    endTime: Date,
}, {timestamp: true})
  
module.exports = mongoose.model('usertime', Timer);