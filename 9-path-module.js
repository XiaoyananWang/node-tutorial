const path = require("path");

// sep method shows the separator of the path
console.log(path.sep);

// join method, joins a sequence of path segments using the platform specific separator, returns a normalized resulting path
const filePath = path.join("./content", "subfolder", "test.txt");
console.log(filePath);

// basename method, if you only want a last portion of a path
const base = path.basename(filePath);
console.log(base);

//resolve method, returns an absolute path, it accepts a sequence of paths or path segments and resolves it into an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
