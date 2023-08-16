import { NlpManager } from "node-nlp";
const manager = new NlpManager({ languages: ["ur"] });

// Add intents and sample utterances for training
manager.addDocument("ur", "سلام کیسے ہیں", "greetings.hello");
manager.addDocument("ur", "کیا حال ہے", "greetings.how_are_you");
manager.addDocument("ur", "آپ کیسے ہیں؟", "greetings.how_are_you");

// ... add more documents and intents

// Train the NLP model
(async () => {
  await manager.train();
  manager.save();
  console.log("Model trained and saved");
})();

// Process user input
(async () => {
  await manager.load();
  const response = await manager.process("ur", "آپکا حال کیسا ہے");
  console.log("Intent:", response.intent);
  //   console.log("Entities:", response);
})();
