// email validate
// password validate
// password == confirm

const { validateEmail, validatePassword } = require("../utils/validation");


const initialRegisterChecks = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    console.log(req.body);

    if (
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword === password &&
        validateEmail(email) && validatePassword(password)
    ) {
        next();
    } else {//there is client side error => unauthorized
        res.status(401).send("Initital checks failed !");

    }
    
}

module.exports = initialRegisterChecks;