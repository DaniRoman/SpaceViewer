const router = require("express").Router();
const indexController = require("../controllers/index.controller")

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
/* GET home page */
router.get("/", indexController.index)
router.get("/home", isLoggedIn,indexController.main)
router.get("/exoplanets", isLoggedIn,indexController.exoMain)
module.exports = router;
