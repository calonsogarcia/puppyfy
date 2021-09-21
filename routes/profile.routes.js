const router = require("express").Router();
const UserModel = require("../models/User.model");

//require cloudinary
const fileStorage = require('../middlewares/cloudinary');
const User = require("../models/User.model");

router.get("/profiles-list", (req, res, next) => {
    // res.render("profile/profile.hbs")
    UserModel.find(req.params.username)
        .then((allUsers) => {
            res.render("profile/profiles-list.hbs", {allUsers})
        })
        .catch((err) => {
            next(err)
        });
    })


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
router.get("/:userId/profile-edition", /* fileStorage.single('userImage') */ (req, res, next) => {
    const user_id = req.params.userId;
   /*  const profilePicture = req.file.path;  */ //GET THE IMAGE
    UserModel.findByIdAndUpdate(user_id, /* profilePicture */)
        .then((userFromDb) => {
            res.render("profile/profile-edition.hbs", {user: userFromDb});
        })
        .catch((err) => {next(err)});
});

router.post("/:userId/profile-edition", /* fileStorage.single('userImage'),  */(req, res, next) => {
    const user_id = req.params.userId;
    // const profilePicture = req.file.path;  //GET THE IMAGE
    const { username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments } = req.body;
    UserModel.findByIdAndUpdate(user_id, /* profilePicture, */ { username, email, password, fullName, dateOfBirth, sex, address, phone, job, familyStructure, comments }, {new: true})
        .then((userFromDb) => {
            console.log("profile updated", userFromDb)
            res.redirect(`/profile/${userFromDb._id}`);
        })
        .catch((err) => {
            next(err);
        });

});
 
// DELETE PROFILE
router.post("/:userId/delete", (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.userId)
        .then(() => {
            res.redirect("/home");
        })
        .catch((err) => {
            next(err);
        });
    });

module.exports = router;