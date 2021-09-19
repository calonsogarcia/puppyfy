const router = require("express").Router();
const UserModel = require("../models/User.model");

router.get("/:userId", (req, res, next) => {
    const user_id = req.params.userId;
    const logged_id = req.session.loggedInUser._id;
    const isLoggedUser = user_id === logged_id;
    UserModel.findById(user_id)
        .then((userFromDB) => {
            res.render("profile/profile.hbs", { user: userFromDB, isLoggedUser });
        })
        .catch((err) => {
            next(err);
        });
});

// EDIT PROFILE
router.get("/:userId/edition", (req, res, next) => {
    const user_id = req.params.userId;
    const logged_id = req.session.loggedInUser._id;
    const isLoggedUser = user_id === logged_id;

    UserModel.findById(user_id)
        .then((profile) => {
            res.render(`/profile/${{ user_id }}/edition`, { profile });
        })
        .catch((err) => {
            next(err);
        });
});
/* router.post("/:userId/edition", (req, res, next) => {
    const { username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments } = req.body;
    // WATCH OUT DONT CREATE => UPDATE
    UserModel.findByIdAndUpdate(user_id, { username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments })

    .then((profile) => {
            res.redirect(`/profile/${{user_id}}/edition`, { profile })
        })
        .catch((err) => { next(err) });
}); */
router.post("/:userId/edition", (req, res, next) => {
    const user_id = req.params.userId;
    const logged_id = req.session.loggedInUser._id;
    const isLoggedUser = user_id === logged_id;
    const {
        username,
        email,
        job,
        birthDate,
        sex,
        adress,
        phone,
        familyStructure,
    } = req.body;
    UserModel.findByIdAndUpdate(user_id, {
            username,
            email,
            job,
            birthDate,
            sex,
            adress,
            phone,
            familyStructure,
        })
        .then((profile) => {
            res.redirect("/profile", { profile });

        })
        .catch((err) => {
            next(err);
        });
});
router.post("/:userId/delete", (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.userId).then((profile) => {
        res.redirect("/profile");
    });
});
module.exports = router;