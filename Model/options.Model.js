import sequelize from "../Config/sequelize.js";
import { DataTypes } from "sequelize";

export const Options = sequelize.define(
  "Options",
  {
    option_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    subCategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    option_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Options",
  }
);
