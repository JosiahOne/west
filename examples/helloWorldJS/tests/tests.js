let hw = require("../helloWorld");

let name = "Person";

if (hw.hello(name) !== "Hello, " + name + "!") {
  console.log("Fail: " + hw.hello(name));
  return 1;
}

console.log("Okay");
return 0;
