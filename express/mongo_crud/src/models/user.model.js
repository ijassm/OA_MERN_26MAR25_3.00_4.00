const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: { createdAt: true, updatedAt: false } });

const UserModel = mongoose.model("user", schema);

module.exports = UserModel;
