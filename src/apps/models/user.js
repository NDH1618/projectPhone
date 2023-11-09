const mongoose = require("../../common/database")();
const usersShema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: null,
    },
    full_name: {
        type: String,
        default: null,
    },
}, {timestamps: true});

const usersModel = mongoose.model("user", usersShema, "users");
module.exports = usersModel;