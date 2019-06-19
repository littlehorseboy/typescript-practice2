var Enum;
(function (Enum) {
    Enum[Enum["No"] = 5] = "No";
    Enum[Enum["Yes"] = 6] = "Yes";
})(Enum || (Enum = {}));
function consoleEnum(recipient, message) {
    console.log(recipient, message);
}
consoleEnum('haha', Enum.No);
