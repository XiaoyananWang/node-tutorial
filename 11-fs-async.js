// FS module, interacting with file system
// async, non-blocking
// sync, blocking

//Async
const { readFile, writeFile } = require("fs");
console.log("start");
// callback, when something is done completely, then the callback will run, i.e. add a eventListener on a button, so whenever the button is clicked, the callback will run
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");

// the moment we start a task we just offload, and continue with the next task