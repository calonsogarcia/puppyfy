const router = require("express").Router();
const PuppyModel = require('../models/Puppy.model');
const AdoptionModel = require('../models/Adoption.model');

router.get("/", (req, res, next) => {
    res.render("adopt/list.hbs");
});

router.get("/dogs", (req, res, next) => {
    PuppyModel.find({puppyType: "Dog"})
    .then((allDogs) => {
        res.render("adopt/dogList.hbs", {allDogs})
    })
    .catch((err) => {next(err)});
});

router.get("/cats", (req, res, next) => {
    PuppyModel.find({puppyType: "Cat"})
    .then((allCats) => {
        res.render("adopt/catList.hbs", {allCats})
    })
    .catch((err) => {next(err)});
});

router.get("/other-puppies", (req, res, next) => {
    PuppyModel.find({puppyType: "Other"})
    .then((allOthers) => {
        res.render("adopt/othersList.hbs", {allOthers})
    })
    .catch((err) => {next(err)});
});




//CREATE AN ADOPTION FORM
router.get("/adoption-form", (req, res, next) => {
    res.render("adopt/adoption-form.hbs");
})

// Revisar
router.post('/adoption-form', (req, res, next) => {
    const {username, puppyName, puppyType, puppyDateOfBirth, puppySex, puppyBreed, puppyColour, puppyFamilyOptions, comments} = req.body
    AdoptionModel.create(id, {username, puppyName, puppyType, puppyDateOfBirth, puppySex, puppyBreed, puppyColour, puppyFamilyOptions, comments})
    .then((newForm) => {
        console.log(newForm)
        res.redirect('/adopt/adoption-form//print')
    })
    .catch((err) => {next(err)});
})

router.get("/adoption-form/print", (req, res, next) => {
        res.render("adopt/adoption-print.hbs"); 
})


// EDIT AN ADOPTION FORM

//DELETE AN ADOPTION FORM



// CREATE A PUPPY
router.get("/give-in-adoption", (req, res, next) => {
    res.render("adopt/give-form.hbs");
})

router.post("/give-in-adoption", (req, res, next) => {
    const {puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments} = req.body
    PuppyModel.create({puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments})
        .then((newPuppy) => {
            console.log("Puppy created");
            res.redirect("/adopt/give-in-adoption/print");
        })
        .catch((err) => {
            next(err);
        });
});

//EDIT A PUPPY
router.get("/give-in-adoption/print", (req, res, next) => {
        res.render("adopt/give-print.hbs");
})







router.post('/give-in-adoption/:id/update', (req, res, next) => {
    const {id} = req.params;
    const {puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments} = req.body;
    PuppyModel.findByIdAndUpdate(id, {puppyType, name, birthDate, sex, colour, breed, familyOptions, image, comments}, {new: true})
    .then((puppy) => {
        res.redirect(`/give-in-adoption/${puppy._id}`)
    })
    .catch((err) => {next(err)});
})



//DELETE A PUPPY
router.post('/give-in-adoption/:id/delete', (req, res, next) => {
    const {id} = req.params;
    PuppyModel.findByIdAndDelete(id)
    .then(() => {
        res.redirect("/")
    })
    .catch((err) => {next(err)});
})



module.exports = router;