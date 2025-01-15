"use strict";
function typeName(arg) {
    if (arg === null) {
        return 'null';
    }
    return typeof arg;
}
const strVal = typeName("Hello"); //"string"
const numVal = typeName(20); //'number'
const boolVal = typeName(false); //'boolean'
const undefinedVal = typeName(undefined); //'undefined'
const functionVal = typeName(() => console.log('hello world')); //function
const objVal = typeName(['hello', 4]); //'object'
const nullVal = typeName(null);
