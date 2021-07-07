module.exports = (sequelize, Sequelize) => {
    const services = sequelize.define('services', {
        title: {
            type: Sequelize.STRING,
        }
    }, {
        freezeTableName: true,
    })
    return services;
}