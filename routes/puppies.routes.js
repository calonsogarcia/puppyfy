const router = require("express").Router();
const PuppyModel = require("../models/Puppy.model");
const AdoptionModel = require("../models/Adoption.model");

router.get("/", (req, res, next) => {
    res.render("adopt/list.hbs");
});

router.get("/dogs", (req, res, next) => {
    PuppyModel.find({ puppyType: "Dog" })
        .then((allDogs) => {
            res.render("adopt/dogList.hbs", { allDogs });
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/cats", (req, res, next) => {
    PuppyModel.find({ puppyType: "Cat" })
        .then((allCats) => {
            res.render("adopt/catList.hbs", { allCats });
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/other-puppies", (req, res, next) => {
    PuppyModel.find({ puppyType: "Other" })
        .then((allOthers) => {
            res.render("adopt/othersList.hbs", { allOthers });
        })
        .catch((err) => {
            next(err);
        });
});

//CREATE AN ADOPTION FORM
router.get("/:puppyId/adoption-form", (req, res, next) => {
    PuppyModel.findById(req.params.puppyId)
        .then((puppy) => {
            res.render("adopt/adoption-form.hbs", { puppy });
        });
});

router.post("/:puppyId/adoption-form", (req, res, next) => {
    let user_id;
    const puppy_id = req.params.puppyId;
    if (req.session.loggedInUser) {
        user_id = req.session.loggedInUser._id;
    }
    if (!user_id || !puppy_id) {
        res.redirect(`/adopt/${puppy_id}/adoption-form`);
        return;
    }
    AdoptionModel.create({
            user_id,
            puppy_id,
        })
        .then((adoption) => {
            res.redirect(`/adopt/${adoption._id}/adoption-print`);
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/:adoptionId/adoption-print", (req, res, next) => {
    AdoptionModel.findById(req.params.adoptionId)
        .populate('puppy_id')
        .then((adoption) => {
            res.render("adopt/adoption-print.hbs", { adoption_id: adoption._id, puppy: adoption.puppy_id });
        });
});

//DELETE AN ADOPTION FORM
router.post("/:adoptionId/delete", (req, res, next) => {
    AdoptionModel.findByIdAndDelete(req.params.adoptionId)
        .then((adoption) => {
            res.redirect("/adopt");
        });
});



// CREATE A PUPPY
router.get("/give-in-adoption", (req, res, next) => {
    res.render("adopt/give-form.hbs");
});

router.post("/give-in-adoption", (req, res, next) => {
    const { puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments} = req.body;
    PuppyModel.create({ puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments })
    .then((puppy) => {
        console.log("Puppy created", { puppy });
        res.redirect(`/adopt/${puppy._id}/give-in-adoption/print`);
    })
    .catch((err) => {
        next(err);
    });
});

router.get("/:puppyId/give-in-adoption/print", (req, res, next) => {
    const puppy_id = req.params.puppyId;
    PuppyModel.findById(puppy_id)
        .then((puppy) => {
            res.render("adopt/give-print.hbs", { puppy });
        })
        .catch((err) => next(err))
});

//EDIT A PUPPY
router.get("/:puppyId/give-in-adoption/update", (req, res, next) => {
    const puppy_id = req.params.puppyId;
    PuppyModel.findById(puppy_id)
        .then((puppy) => {
            res.render("adopt/give-update-form.hbs", { puppy });
        })
        .catch((err) => next(err))
});

router.post("/:puppyId/give-in-adoption/update", (req, res, next) => {
    const puppy_id = req.params.puppyId;
    const { puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments } = req.body;
    PuppyModel.findByIdAndUpdate( puppy_id, { puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments }, { new: true })
        .then((puppy) => {
            console.log("puppy updated", puppy);
            res.redirect(`/adopt/${ puppy._id }/give-in-adoption/print`);
        })
        .catch((err) => {
            next(err);
        });
});

//DELETE A PUPPY
router.post("/:puppyId/give-in-adoption/print/delete", (req, res, next) => {
    PuppyModel.findByIdAndDelete(req.params.puppyId)
        .then(() => {
            console.log("deleted puppy")
            res.redirect("/adopt");
        })
        .catch((err) => {
            next(err);
        });
}); 

module.exports = router;