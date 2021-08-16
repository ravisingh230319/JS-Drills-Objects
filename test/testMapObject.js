import { mapObject } from "../mapObject.js";
import { testObject } from "../testObject.js"
let cb = a => a;
console.log(mapObject(testObject,cb));