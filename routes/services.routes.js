const router = require("express").Router();

router.get("/puppycare", (req, res, next) => {
    res.render("services/list.hbs");
});
router.get("/partners-form", (req, res, next) => {
    res.render("services/partners-form.hbs");
})
router.post("/partners-form", (req, res, next) => {
    const { name, adress, contact } = req.body
    Service.create({ name, adress, contact })
        .then((data) => res.redirect("/services"))
        .catch((err) => console.log(err));

})

module.exports = router;