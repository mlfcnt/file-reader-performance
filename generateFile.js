const fs = require("fs");
const fileName = "largefile_nonstream.txt";
const LOOP_AMOUNT = 1e8;

console.time("non-streaming");

// const data =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula.\n";
// let file = fs.createWriteStream(fileName);

// for (let i = 0; i <= LOOP_AMOUNT; i++) {
//   file.write(data);
// }

// file.end(() => {
//   console.timeEnd("non-streaming");
// });

const fileNameStream = "largefile_stream.txt";
console.time("streaming");
const stream = fs.createWriteStream(fileNameStream);
const dataStream =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula.\n";
for (let i = 0; i <= LOOP_AMOUNT; i++) {
  if (!stream.write(dataStream)) {
    stream.once("drain", () => console.log("Stream drained"));
  }
}
stream.end(() => {
  console.timeEnd("streaming");
});
