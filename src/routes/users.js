const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidation");


router.get("/", controller.users); 
router.get("/register", controller.register);
router.post("/register", controller.crear);
router.get("/login" , controller.login);
router.post("/login",loginValidator, controller.processLogin);
router.get("/reset-password", controller.resetPassword);
router.get("/metodosDePago", controller.metodosDePago);
router.get("/pagoTarjeta", controller.pago)

module.exports = router;