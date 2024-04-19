'use strict';
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
 employeeId: {type: String, required: true},
 from: {type: Date, required: true},
 to: {type: Date, required: true},
 leaveType: {type: String, required: true},
 description: {type: String, required: true},
 status: {type: String, default: 'pending'},
 approvedBy: String,
}, {timestamps: true});

module.exports = mongoose.model('leave', UserSchema);