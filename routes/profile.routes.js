
const router = require("express").Router();
const UserModel = require("../models/User.model");


router.get("/:userId", (req, res, next) => {
    const user_id = req.params.userId;
    const logged_id = req.session.loggedInUser._id;
    const isLoggedUser = user_id === logged_id;
    UserModel.findById(user_id)
        .then((userFromDB) => {
            res.render("profile/profile.hbs", { user: userFromDB, isLoggedUser });
        }).catch((err) => {
            next(err)
        });
});

router.get("/edition", (req, res, next) => {
    res.render("profile/profile-edition.hbs");
});

router.post("/edition", (req, res, next) => {
    const {username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments} = req.body
    // WATCH OUT DONT CREATE => UPDATE
    UserModel.findByIdAndUpdate({username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments})
        .then((profile) => {
            res.redirect('/profile', {profile})
        })
        .catch((err) => { next(err) });
})



module.exports = router;
