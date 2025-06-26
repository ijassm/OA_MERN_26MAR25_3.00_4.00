const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    isCompleted: Boolean,
    default: false,
});

const TodoModel = mongoose.model("todo", schema);

module.exports = TodoModel;
