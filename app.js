const express =  require(`express`);
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require(`mongoose`);
const path = require(`path`);
const methodOverride = require("method-override");
const ExpressError = require(`./utils/expressError.js`);
const session = require(`express-session`);
const flash = require(`connect-flash`);
const passport = require(`passport`);
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

const userRouter = require(`./routes/user.js`);
const courseRouter = require(`./routes/course.js`);

const sessionOptions = {
    secret: "mySuperSecretIsWhomITrulyAm",
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 1000, // Expiry Date : 7 Days After Their Date Of Creation
        maxAge : 7 * 24 * 60 * 1000,
        httpOnly : true,
    },
};

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine(`ejs`, ejsMate);
app.use(session(sessionOptions));
app.use(flash());

// Implementing Local Strategy For Authentication For Indivisual Sessions
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/learningPlatform`);
};

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

app.listen(8080, () => {
    console.log(`\nThe App Is Listenig On Port 8080`);
});

app.get('/', (req, res) => {
    res.send('The App Is Working');
});

// Implementing User Route :
app.use(`/user`, userRouter);

// Implementing Course Route :
app.use('/course', courseRouter);