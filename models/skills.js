const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name : {
        type : String,
    }
});

const Skill = mongoose.model("SKill", skillSchema);