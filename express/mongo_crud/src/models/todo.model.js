const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    isCompleted: Boolean,
}, { timestamps: { createdAt: true, updatedAt: false } });

const TodoModel = mongoose.model("todo", schema);

module.exports = TodoModel;
