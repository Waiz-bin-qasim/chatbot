import express from "express";
import messageRoutes from "./Routes/Message.Routes.js";
import categoriesRoutes from "./Routes/categories.Routes.js";
import subCategoryRoute from "./Routes/subCategories.Routes.js";
import optionsRoutes from "./Routes/options.Routes.js";
import { chatBotInit } from "./helper/chat-bot.Helper.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/message", messageRoutes);
app.use("/categories", categoriesRoutes);
app.use("/subCategories", subCategoryRoute);
app.use("/options", optionsRoutes);

app.listen(port, async () => {
  await chatBotInit();
  console.log(`Example app listening on port ${port}!`);
});
