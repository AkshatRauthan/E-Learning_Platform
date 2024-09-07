const mongoose = require(`mongoose`);
const testData = require(`./data.js`);
const Listing = require(`../models/listing.js`);

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/wanderlust`);
}

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

async function initializeDB(){
    await Listing.deleteMany({});
    testData.data = testData.data.map((obj) => ({...obj, owner:'66d9af015f4dd27317cf229c'}));
    await Listing.insertMany(testData.data);
    console.log(`The Database Is Initialized With The Test Data`);
}

initializeDB();