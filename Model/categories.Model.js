import sequelize from "../Config/sequelize.js";
import { DataTypes } from "sequelize";

export const Categories = sequelize.define(
  "Categories",
  {
    category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Categories",
  }
);
