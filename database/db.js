let dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql"
    }
)

// auth models

const user = require('../models/users');
const services = require('../models/services');

// append sequelize to model

const usersModel = user(sequelize, Sequelize);
const servicesModel = services(sequelize, Sequelize);

module.exports = {
    usersModel,
    servicesModel,
    Sequelize,
    sequelize
}