var mongoose = require('mongoose');

module.exports = mongoose.model('Item',{
    serviceNum: String,
    status: String,
    msg: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});