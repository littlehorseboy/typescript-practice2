var Enum3;
(function (Enum3) {
    Enum3[Enum3["Foo"] = 0] = "Foo";
    Enum3[Enum3["Bar"] = 1] = "Bar";
})(Enum3 || (Enum3 = {}));
function f3(x) {
    if (x !== Enum3.Foo || x !== Enum3.Bar) {
    }
}
