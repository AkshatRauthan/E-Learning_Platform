const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const defaultImage = 
"https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";

const courseSchema = new Schema({
    name : {
        type : String,
    },
    image :{
        type : String,
        set: (link) => link === "" ? defaultImage : link,
        default : defaultImage
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
    features : [{
        type : String
    }],
    price : {
        type : Number,
        min : 0,
    },
    duration : {
        type : String,
    },
    mentors : [{
        type : Schema.Types.ObjectId,
        ref : "Mentor"
    }]
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;