const { check, body } = require("express-validator");
const path = require("path");

module.exports = [
    check("email")
        .notEmpty().withMessage("Debe ingresar un email").bail()
        .isEmail().withMessage("Debe ingresar un email válido"),

        body("email")
        .custom((value) => {
            let users = JSON.parse(fs.readFileSync(usersDataPath, "utf-8"));
            let userToLogin = users.find(user => user.email == value);
            if(userToLogin){
                return true;
            } else {
                return false;
            }
        }).withMessage("El email no se encuentra registrado"),

    check("password")
        .notEmpty().withMessage("Debe ingresar una contraseña").bail(),

    body("password")
        .custom((value, {req}) => {
            let users = JSON.parse(fs.readFileSync(usersDataPath, "utf-8"));
            let userToLogin = users.find(user => user.email == req.body.email);
            if(userToLogin){
                if(userToLogin.password == value){
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }).withMessage("La contraseña es incorrecta")
];