
const router = require("express").Router();
const UserModel = require("../models/User.model");


router.get("/", (req, res, next) => {
    res.render("profile/profile.hbs");
});

router.get("/edition", (req, res, next) => {
    res.render("profile/profile-edition.hbs");
});

router.post("/edition", (req, res, next) => {
    const {username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments} = req.body
    UserModel.create({username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments})
        .then((profile) => {
            res.redirect('/profile', {profile})
        })
        .catch((err) => { next(err) });
})



module.exports = router;
