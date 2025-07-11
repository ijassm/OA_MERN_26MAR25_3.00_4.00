const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};


const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new UserModel({ username, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ success: true, data: newUser, message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}


module.exports = {
    register,
}