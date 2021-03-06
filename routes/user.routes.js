const router = require("express").Router();
const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');


router.get("/signup", (req, res, next) => {
    res.render("user/signup.hbs");
});

router.post("/signup", (req, res, next) => {
    const { username, email, password } = req.body;

    // Backend validators
    //check if it is empty
    if (!username || !email || !password) {
        res.render("/signup.hbs", {
            errorMessage: "Please, fill out all fields",
        });
        return;
    }

    //check email
    const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!mailRegex.test(email)) {
        res.render("user/signup.hbs", {
            errorMessage: "Please, write a correct email format",
        });
        return;
    }

    //check password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        res.render("user/signup.hbs", {
            errorMessage: "Strong password needs at least 8 characters long, uppercase and lowercase",
        });
        return;
    }

    // check if email exists
    // if exists render the page and the error message
    // if not, create the user + encrypt the password
    UserModel.findOne({ email })
        .then((user) => {
            if (user) {
                res.render("user/signup.hbs", { errorMessage: 'The email already exists. Please write another one or Login' })
            } else {
                const salt = bcrypt.genSaltSync(12);
                const hashedPassword = bcrypt.hashSync(password, salt)
                    // console.log(hashedPassword)

                UserModel.create({ username, email, password: hashedPassword })
                    .then(() => {
                        res.redirect('/user/login')
                    })
                    .catch((err) => {
                        next(err)
                    });
            }
        })
        .catch((err) => {
            next(err)
        });

});

router.get("/login", (req, res, next) => {
    res.render("user/login.hbs");
});


router.post('/login', (req, res, next) => {
    //require the info needed for login
    const { username, password } = req.body

    // check that everything is fulfill
    if (!username || !password) {
        res.render('user/login.hbs', { errorMessage: "Please, fill out all fields" })
        return;
    }

    // check if user exists
    UserModel.findOne({ username })
        .then((user) => {
            if (user) {

                // check if the password exists
                const checkPassword = bcrypt.compareSync(password, user.password)

                if (checkPassword) {
                    //create the active session
                    req.session.loggedInUser = user;
                    req.app.locals.isLoggedIn = true;
                    req.app.locals.loggedInUserId = user._id;

                    res.redirect(`/profile/${user._id}`);

                } else {
                    res.render('user/login.hbs', { errorMessage: "The password is wrong, please, try again!" })
                }
            } else {
                //if user doesn't exist send them back to login
                res.render('user/login.hbs', { errorMessage: "The user doesn't exist, please signup to login" })
            }
        })
        .catch((err) => {
            next(err)
        });
})

router.get('/logout', (req, res, next) => {
    req.session.destroy()
    req.app.locals.isLoggedIn = false;
    req.app.locals.loggedInUserId = false;
    res.redirect('/home')
})



module.exports = router;