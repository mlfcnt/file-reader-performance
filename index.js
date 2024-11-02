const fs = require("fs");
console.time("non-streaming");

fs.readFile("largefile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.timeEnd("non-streaming");
});

console.time("streaming");

const readStream = fs.createReadStream("largefile.txt", "utf8");

readStream.on("data", (chunk) => {
  // Processing chunk (optional)
});

readStream.on("end", () => {
  console.timeEnd("streaming");
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});
