var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var r = Color.Red;
var g = Color.Green;
var b = Color.Blue;
console.log(r, g, b);
