import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { NlpManager } from "node-nlp";
const __dirname = dirname(fileURLToPath(import.meta.url));
const csvFilePath = path.join(__dirname, "dataset.csv");

const manager = new NlpManager({ languages: "en" });

fs.readFile(csvFilePath, "utf8", async (err, data) => {
  if (err) {
    console.error("Error reading CSV file:", err);
    return;
  }

  // Process the CSV data
  const lines = data.split("\n");
  const header = lines[0].split(",");
  const rows = lines.slice(1).map((line) => line.split(","));

  for (let val of rows) {
    console.log(val);
    manager.addDocument(
      "en",
      val[1] === "" ? "a" : val[1],
      val[2] + "." + val[3]
    );
  }
  await manager.train();
  manager.save("./model.json");
  const res = await manager.process(
    "en",
    "can i register more than one online account with a single email"
  );
  console.log(res);
  //   console.log("Header:", header);
  //   console.log("Rows:", rows);
});
