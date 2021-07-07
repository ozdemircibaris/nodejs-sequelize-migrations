'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'users',
        'deneme5',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('users', 'deneme5', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
