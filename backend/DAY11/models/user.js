const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");


//model name: User             //name of table represented by model called User
const User = sequelize.define('User', {
    //Model attributes are defined here
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        //if not mentioned allowNull defaults to true
    }
})

module.exports = User;


//Model is an abstraction that represents a table in your dtabase.The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).
//A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.