const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        required:true,
        default: 'Default ToDo text'
    },
});
4

module.exports = mongoose.model('ToDo', todoSchema);
