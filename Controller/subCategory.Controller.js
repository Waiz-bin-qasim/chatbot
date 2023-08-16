import { Categories, subCategories } from "../Model/associations.Model.js";

export const getSubCategories = async (req, res) => {
  let subcategories;
  try {
    subcategories = await subCategories.findAll({
      include: { model: Categories },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ err: error });
  }
  res.send(subcategories);
};

export const addSubCategories = async (req, res) => {
  let subcategories = req.body;
  console.log(subcategories);
  try {
    subcategories = await subCategories.create(subcategories, {
      fields: ["subCategory_name", "category_id"],
    });
    await chatBotInit();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ err: error });
  }
  res.send(subcategories);
};

export const updateSubCategories = (req, res) => {};
export const deleteSubCategories = (req, res) => {};
