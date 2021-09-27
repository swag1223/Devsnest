//for setting up connectivity with the database we are creating a Sequelize instance.
//sequelize is ORM (Object-relational mapping) - meaning that it maps an object syntax onto our database schemas.

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres", //db name
    "postgres", //username
    "123456789", //password
    { //options
        host: "localhost",
        dialect: "postgres"
    }
    
);

sequelize.sync();

//self calling function
(async () => {
    try {
        //.authenticate() function is used for testing if the connection is OK:
        await sequelize.authenticate();
        console.log("Connection has been established successfully with the database")
    } catch (error) {
        console.error("Unable to connect to the database")
    }
    
})();

module.exports = sequelize;
    

