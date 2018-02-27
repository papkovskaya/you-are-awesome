// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return Object.defineProperty(this, propertyName, { value: this[propertyName], configurable: true, enumerable: true }) };
const createNotEnumerableProperty = (propertyName) => { Object.defineProperty(this, this[propertyName], {enumerable: false, writable: false, configurable: false}) };
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
const returnBackInSecond = (param) => {};
const getDeepPropertiesCount = () => {};
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
