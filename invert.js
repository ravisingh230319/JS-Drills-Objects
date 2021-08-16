export function invert(obj) {
    let myObj = {};
    Object.keys(obj).forEach((key) => {
        myObj[obj[key]] = key;
    });
    return myObj;// Returns a copy of the object where the keys have become the values and the values the keys.
}
