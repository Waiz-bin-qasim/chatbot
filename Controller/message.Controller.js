import { Categories } from "../Model/categories.Model.js";
import { chat_bot_logs } from "../Model/chat-bot-logs.Model.js";
import { getStepNumber } from "../helper/step-number.Helper.js";
import { messageHandler } from "../helper/message.Helper.js";
import { predict } from "../helper/chat-bot.Helper.js";

export const chatBot = async (req, res) => {
  const { user_id, message } = req.body;
  let response, step_number;
  try {
    step_number = await getStepNumber(user_id);
    //if user already exist in the logs
    if (user_id && step_number) {
      response = await messageHandler(message, user_id, step_number);
    } else {
      //create user if does not exist
      const log = await chat_bot_logs.create({ current_step: 1 });
      response = await Categories.findAll({
        attributes: ["category_name"],
      });
      response = { options: response, user_id: log.user_id };
    }
    if (response.length === 0) {
      response = await predict(message);
      console.log(response);
      response = response.answers;
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
  return res.send(response);
};
