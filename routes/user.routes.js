const router = require("express").Router();

router.get("/home", (req, res, next) => {
    res.render("home.hbs");
});

router.get("/signup", (req, res, next) => {
    res.render("user/signup.hbs");
});

router.post("/signup", (req, res, next) => {
    const { username, email, password } = req.body;

    // Backend validators
    //check if it is empty
    if (!username || !email || !password) {
        res.render("user/signup.hbs", {
            errorMessage: "Please, fill out all fields",
        });
        return;
    }

    //check email
    const mailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!mailRegex.test(email)) {
        res.render("user/signup.hbs", {
            errorMessage: "Please, write a correct email format",
        });
        return;
    }

    //check password
    const passwordRegex =
        /^ ( ? = .*\d)( ? = .*[a - z])( ? = .*[A - Z])( ? = .*[a - zA - Z]). { 8, }$/;
    if (!passwordRegex.test(password)) {
        res.render("user/signup.hbs", {
            errorMessage: "Strong password needs at least 8 characters long, uppercase and lowercase",
        });
        return;
    }

    //check if email exists
});

module.exports = router;