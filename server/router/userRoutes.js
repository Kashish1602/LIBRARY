const express = require("express");
const router = express.Router();
const User = require("../controllers/controllerApi");
router.post("/admin/studadd", User.createUser);
router.post("/admin/bookadd",User.createBook)
router.post("/login",User.LoginUser);
router.get("/getbook",User.getBook);
router.get("/specificBook/:id", User.specificBook);
module.exports = router;