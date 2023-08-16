import sequelize from "../Config/sequelize.js";
import { DataTypes } from "sequelize";

export const subCategories = sequelize.define(
  "subCategories",
  {
    subCategory_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    subCategory_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "subCategories",
  }
);
