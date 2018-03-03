// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => { return property };
const createNotEnumerableProperty = (property) => { 
    Object.defineProperty(Object.prototype, property, { value: 'value', enumerable: false });
    return property;
};
const createProtoMagicObject = () => {
    let protoMagicObject = new Function();
    protoMagicObject.__proto__ = undefined;
    protoMagicObject.prototype = protoMagicObject.__proto__;
    return protoMagicObject;
};
let inc = 0;
let inc2 = 0;
Function.prototype.toString = function () {
    return inc
};
const incrementor = () => { inc++; return incrementor};
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        inc2++;
        return resolve(inc2);
    })
};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () { resolve(param);}, 1000)});
    return promise;
};

const getDeepPropertiesCount = (obj) => {
    let properties = Object.getOwnPropertyNames(obj);
    let result = properties.length;
    for (let i = 0; i < properties.length; i++){
        let temp = obj[properties[i]];
        if (Object.getOwnPropertyNames(temp.length > 0)) {
            result += getDeepPropertiesCount(temp);
        }
    }
    return result;
};
const createSerializedObject = () => { return null };
const sortByProto = (array) => {
    array.sort((a, b) => {
        return a.__proto__ - b.__proto__;
    })
    return array;
};

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
