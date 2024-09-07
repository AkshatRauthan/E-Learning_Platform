const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    name : {
        type : String
    },
    skills : [{
        type : String
    }],
    category : {
        type : String
    },
    experience : [{
        type : String
    }],
});

const Mentor = mongoose.model("Mentor", mentorSchema);
module.exports = Mentor;