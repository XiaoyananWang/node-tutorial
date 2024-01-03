// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular object
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)
// Used to use global install for the frontend library s.a. react or strapi, etc. But now from npm 5.2, we use npx

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// When push to github, don't push node_modules folder, simply use gitignore
// As long as you have the package.json, the person can npm install to download the node_modules himself.