import { BOOLEAN, Sequelize } from "sequelize";

export default (sequelize) => {
  class Recipe extends Sequelize.Model{}

  Recipe.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title cannot be null!",
        },
        notEmpty: {
          msg: "Title cannot be empty!",
        },
      },
    },

    cookTime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "cookTime cannot be null!",
        },
        notEmpty: {
          msg: "cookTime cannot be empty!",
        },
      },
    },

    servings: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "servings cannot be null!",
        },
        notEmpty: {
          msg: "servings cannot be empty!",
        },
      },
    },

    favourite: {
      type:Sequelize.BOOLEAN,
      allowNull: false,
    },

  }, {
      sequelize,
      timepstamps: false,
      createdAt: false,
      updatedAt: false
  });

  return Recipe;
};
