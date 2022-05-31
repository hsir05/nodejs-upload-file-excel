module.exports = (sequelize, Sequelize) => {
  const Excel = sequelize.define("excel", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    published: {
      type: Sequelize.BOOLEAN,
    }
  });

  return Excel;
};