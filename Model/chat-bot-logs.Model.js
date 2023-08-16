import sequelize from "../Config/sequelize.js";
import { DataTypes } from "sequelize";

export const chat_bot_logs = sequelize.define(
  "chat_bot_logs",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    current_step: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "chat_bot_logs",
  }
);
