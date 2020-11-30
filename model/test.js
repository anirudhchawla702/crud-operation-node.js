const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    UserName: {
        type: String,
    },
    Password: {
        type: String,
    }
});

module.exports = mongoose.model("anirudh", testSchema);