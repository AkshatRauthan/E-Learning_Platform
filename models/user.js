const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
    },
    phoneNo : {
        type : Number,
        min : 1000000000,
        max : 9999999999
    },
    courses : [{
        type : Schema.Types.ObjectId,
        ref : "Course"
    }]
});

const User = mongoose.model("User", userSchema);
module.exports = User;