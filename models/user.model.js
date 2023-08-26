const mongoose = require("mongoose");


let userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => value.length <= 20,
    },
    price: Number,
    description: String,
});

module.exports = mongoose.model("user", userSchema);