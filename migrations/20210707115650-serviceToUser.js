'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'users',
        'service_id',
        {
          type: Sequelize.DataTypes.INTEGER(11),
          references: {
            primaryKey: true,
            model: "services",
            key: "id"
          }
        },
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      console.log(`error`, error)
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('users', 'service_id', { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
