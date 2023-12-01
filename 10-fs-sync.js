// FS module, interacting with file system
// async, non-blocking
// sync, blocking

//Sync
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// need to provide the path and the encoding, so the node knows how to decode the file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
// if there is no such file, node will create this file, if there is this file, node will overwrite the value of it
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first},${second}`,
  // use flag to append value
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next task");

// one by one, user need to wait for the previous task to be done