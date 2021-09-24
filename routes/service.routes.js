const router = require("express").Router();
const ServiceModel = require('../models/Service.model')

//require cloudinary
const fileStorage = require('../middlewares/cloudinary');

router.get("/", (req, res, next) => {
    res.render("services/list.hbs");
});

router.get("/hairdressers", (req, res, next) => {
    ServiceModel.find({ serviceType: "Hairdresser" })
        .then((allHairdressers) => {
            res.render("services/hairdressers.hbs", { allHairdressers })
        })
        .catch((err) => { next(err) });
});


router.get("/puppy-sitters", (req, res, next) => {
    ServiceModel.find({ serviceType: "PuppySitter" })
        .then((allPuppysitters) => {
            res.render("services/puppy-sitters.hbs", { allPuppysitters })
        })
        .catch((err) => { next(err) });
});

router.get("/puppy-trainers", (req, res, next) => {
    ServiceModel.find({ serviceType: "PuppyTrainer" })
        .then((allPuppyTrainers) => {
            res.render("services/puppy-trainers.hbs", { allPuppyTrainers })
        })
        .catch((err) => { next(err) });
});

router.get("/veterinaries", (req, res, next) => {
    ServiceModel.find({ serviceType: "Veterinary" })
        .then((allVeterinaries) => {
            res.render("services/veterinary.hbs", { allVeterinaries })
        })
        .catch((err) => { next(err) });
});


// CREATE A SERVICE
router.get("/partners-form", (req, res, next) => {
    res.render("services/partners-form.hbs");
})

router.post("/partners-form", fileStorage.single('image'), (req, res, next) => {
    let user_id;
    if (req.session.loggedInUser) {
        user_id = req.session.loggedInUser._id;
    }
    if (!user_id) {
        res.redirect(`/puppy-care/partners-form`);
        return;
    }
    let image;
    if(req.file){
      image = req.file.path;
    }
    const { name, serviceType, address, contact} = req.body;
    ServiceModel.create({ name, serviceType, address, contact, image, user_id })
        .then((service) => {
            console.log("service created", service);
            res.redirect("/home")
        })
        .catch((err) => next(err));
});

// UPDATE A SERVICE
router.get("/:serviceId/partners-edition", (req, res, next) => {
    ServiceModel.findById(req.params.serviceId)
        .then((service) => {
            res.render("services/partners-edition.hbs", {service})
        })
        .catch((err) => { next(err) });
    
})

router.post("/:serviceId/partners-edition", fileStorage.single('image'), (req, res, next) => {
    let image;
    if(req.file){
      image = req.file.path;
    }
    const { name, serviceType, address, contact } = req.body;
    ServiceModel.findByIdAndUpdate(req.params.serviceId, { name, serviceType, address, contact, image }, {new: true})
    .then((editedService) => {
        console.log("Here's the service you just edited", {editedService})
        res.redirect("/puppy-care/partners-form")
    })
    .catch((err) => { next(err) });
})

// DELETE A SERVICE
router.post("/:serviceId/partners-edition/delete", (req, res, next) => {
    ServiceModel.findByIdAndDelete(req.params.serviceId)
    .then(() => {
        res.redirect("/puppy-care/partners-form")
    })
    .catch((err) => { next(err) });
})


module.exports = router;