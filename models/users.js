module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define('users', {
        fullName: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
        },
        access_token: {
            type: Sequelize.STRING,
        },
        companyName: {
            type: Sequelize.STRING,
        },
    }, {
        freezeTableName: true,
    })
    return users;
}