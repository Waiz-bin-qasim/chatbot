import { NlpManager } from "node-nlp";
import {
  Categories,
  subCategories,
  Options,
} from "../Model/associations.Model.js";
import fs from "fs";

const getAllData = async () => {
  let res;
  try {
    res = await Categories.findAll({
      include: {
        model: subCategories,
        include: Options,
      },
    });
  } catch (error) {
    throw error;
  }
  return res;
};

export const chatBotInit = async () => {
  let data;
  const manager = new NlpManager({ languages: ["en"], forceNER: true });
  try {
    data = await getAllData();
    console.log(data);
    data.forEach((category) => {
      category.subCategories.forEach((subCategory) => {
        subCategory.Options.forEach((option) => {
          manager.addDocument(
            "en",
            option.option_text,
            category.category_name + "." + subCategory.subCategory_name
          );
          manager.addAnswer(
            "en",
            category.category_name + "." + subCategory.subCategory_name,
            option.response
          );
        });
      });
    });
    await manager.train();
    await manager.save();
    return;
  } catch (error) {
    throw error;
  }
};

export const predict = async (msg) => {
  const manager = new NlpManager({ languages: ["en"], forceNER: true });
  await manager.load();
  console.log(msg);
  return await manager.process(msg);
};
