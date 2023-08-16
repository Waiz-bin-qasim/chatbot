import { chat_bot_logs } from "../Model/chat-bot-logs.Model.js";

export const getStepNumber = async (user_id) => {
  let response;
  try {
    response = await chat_bot_logs.findOne({
      where: {
        user_id: user_id,
      },
    });
  } catch (error) {
    return error;
  }
  return response && response.current_step ? response.current_step : false;
};

export const updateStepNumber = async (user_id, number) => {
  let res;
  try {
    res = await chat_bot_logs.findOne({
      where: {
        user_id: user_id,
      },
    });
    if (res.current_step <= number) {
      await res.increment("current_step", { by: 1 });
    }
  } catch (error) {
    return error;
  }
  return true;
};
