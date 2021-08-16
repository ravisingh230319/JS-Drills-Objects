import { defaults } from "../defaults.js";
import { testObject } from "../testObject.js"
console.log(defaults(testObject,{name:'Ravi',properties:"undefined Properties"}));//Returns object after filling in its undefined properties with the first value present in the following list of defaults objects.