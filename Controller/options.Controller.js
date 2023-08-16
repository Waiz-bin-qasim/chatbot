import { Options } from "../Model/associations.Model.js";

export const getOptions = async (req, res) => {
  let opt;
  try {
    opt = await Options.findAll({});
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  res.send(opt);
};
export const addOptions = async (req, res) => {
  let opt = req.body;
  try {
    opt = await Options.create(opt, {
      fields: [
        "option_number",
        "step_number",
        "option_text",
        "subCategory_id",
        "next_step_id",
        "response",
      ],
    });
    await chatBotInit();
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  res.send(opt);
};
export const updateOptions = async (req, res) => {};
export const deleteOptions = async (req, res) => {};
