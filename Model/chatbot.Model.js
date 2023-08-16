import sequelize from "../Config/Sequelize.js";
import { DataTypes } from "sequelize";

export const chatbot = sequelize.define(
  "chatbot",
  {
    step: {  
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
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "You must enter Phone Number" },
        len: { args: [11, 11], msg: "Phone Number is invalid" },
        isInt: { args: true, msg: "You must enter Phone Number" },
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    sub_category: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    tableName: "chat_bot_logs",
  }
);
