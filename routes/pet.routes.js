const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.render("adopt/list.hbs");
});
router.get("/dogs", (req, res, next) => {
    res.render("adopt/doglist.hbs");
});
router.get("/cats", (req, res, next) => {
    res.render("adopt/catlist.hbs");
});
router.get("/otherpets", (req, res, next) => {
    res.render("adopt/otherslist.hbs");
});
router.get("/create", (req, res, next) => {
    res.render("adopt/adoption-form");
})
router.post("/create", (req, res, next) => {


})


module.exports = router;