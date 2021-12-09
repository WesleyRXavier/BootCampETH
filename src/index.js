var NatureTypes;
(function (NatureTypes) {
    NatureTypes["Human"] = "human";
    NatureTypes["Robot"] = "robot";
    NatureTypes["Animal"] = "animal";
})(NatureTypes || (NatureTypes = {}));
var person = {
    natureType: NatureTypes.Human,
    name: 'Lara',
    birthdate: 14081997
};
var android = {
    natureType: NatureTypes.Robot,
    name: 'JSBot',
    code: 1111
};
function analyzer2(receiver) {
    return "Hello, ".concat(receiver.name, ". You are ").concat(receiver.natureType, ".");
}
console.log(analyzer2(person));