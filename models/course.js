const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name : {
        type : String,
    },
    category : {
        type : String,
    },
    reviews : [{
        type : Schema.Types.ObjectId,
        ref : "Review"
    }],
    skill : [{
        type : String
    }],
    owner: {
        type: Schema.Type.ObjectId,
        ref:"User"
    },
    description : {
        type : String
    },
    freatures : [{
        type : String
    }]
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;