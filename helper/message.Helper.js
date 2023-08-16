import {
  Categories,
  Options,
  subCategories,
} from "../Model/associations.Model.js";
import { updateStepNumber } from "./step-number.Helper.js";

const responseForStepTwo = async (message) => {
  let res;
  try {
    res = await Categories.findAll({
      where: { category_Name: message },
      attributes: {
        exclude: ["category_id", "category_name", "createdAt", "updatedAt"],
      },
      include: {
        model: subCategories,
        // as: "options",
        attributes: ["subCategory_name"],
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
  return res;
};

const responseForStepThree = async (message) => {
  let res;
  try {
    res = await subCategories.findAll({
      where: { subCategory_Name: message },
      attributes: ["subCategory_name"],
      include: [
        {
          model: Options,
          attributes: ["option_text"],
        },
      ],
    });
  } catch (error) {
    return error;
  }
  return res;
};

const responseForStepFour = async (message) => {
  let res;
  try {
    res = await Options.findOne({
      where: { option_text: message },
      attributes: ["response"],
    });
  } catch (error) {
    return error;
  }
  return res;
};

export const messageHandler = async (message, user_id, step_number) => {
  let response;
  try {
    switch (step_number) {
      case 1:
        response = await responseForStepTwo(message);
        break;
      case 2:
        response = await responseForStepThree(message);
        break;
      case 3:
        response = await responseForStepFour(message);
        break;
      default:
        break;
    }
    if (response.length > 0) {
      await updateStepNumber(user_id, step_number);
    }
  } catch (error) {
    return error;
  }
  return response;
};
