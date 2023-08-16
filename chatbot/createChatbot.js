import { NlpManager } from "node-nlp";

export const chatBotInit = async () => {
  const manager = new NlpManager({ languages: ["en"], forceNER: true });
  const [categories, subCategories, options] = await Promise.all([
    getCategories,
    getSubcategories,
    getOptions,
  ]);
};

// manager.addDocument("en", "goodbye for now", "greetings.bye");
// manager.addDocument("en", "bye bye take care", "greetings.bye");
// manager.addDocument("en", "okay see you later", "greetings.bye");
// manager.addDocument("en", "bye for now", "greetings.bye");
// manager.addDocument("en", "i must go", "greetings.bye");
// manager.addDocument("en", "hello", "greetings.hello");
// manager.addDocument("en", "hi", "greetings.hello");
// manager.addDocument("en", "howdy", "greetings.hello");

// manager.addAnswer("en", "greetings.bye", "Till next time");
// manager.addAnswer("en", "greetings.bye", "see you soon!");
// manager.addAnswer("en", "greetings.hello", "Hey there!");
// manager.addAnswer("en", "greetings.hello", "Greetings!");

export const chatbot = async (message) => {
  await manager.train();
  manager.save();
  console.log(message);
  return await manager.process(message);
};
