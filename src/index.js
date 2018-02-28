// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return Object.defineProperty(this, propertyName, { value: this[propertyName], configurable: true, enumerable: true }) };
const createNotEnumerableProperty = (property) => { };
const createProtoMagicObject = () => {};
let inc = 0;
let inc2 = 0;
Function.prototype.toString = function () {
    return inc
};
const incrementor = () => { inc++; return incrementor};
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        inc2++
        return resolve(inc2)
    })
};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () { resolve(param);}, 1000)});
    return promise;
};

const getDeepPropertiesCount = (obj) => {return obj};
const createSerializedObject = () => { return null };
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
