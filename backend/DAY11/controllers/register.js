/* Level 3: Actual work
* check if email already exists 
* hashing of password
* email conversion to lowercase
* save
*/

const User = require("../models/user");
const bcrypt = require("bcrypt");


const saltRounds = 10;

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const emailAlreadyExists = await User.findOne({ where: { email } });
        if (emailAlreadyExists) {
            res.status(401).send("Email already exists");
        }
        else {

            const salt = bcrypt.genSaltSync(slatRounds);
            const hash = bcrypt.hashSync(password, salt);

            const newUser = new User({
                email: email.toLowerCase(),
                password: hash,
                fullName: "Swag"
            });
            const savedUser = await newUser.save();
            res.status(201).send("User Registered successfully " + savedUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
    
};

module.exports = register;