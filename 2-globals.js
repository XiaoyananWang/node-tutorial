//GLOBALS or GLOBAL VARIABLES IN NODE

// GLOBALS - NO WINDOW!!! Node has no window, since it does not have a browser, if you want to access a window object, it will give you error.
// GLOBAL VIARIABLES - you can access them anywhere in your application.

// Some examples of GLOBALS:
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
// console, setInterval, setTimeout, etc