var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var r = Color.Red;
var g = Color.Green;
var b = Color.Blue;
console.log(r, g, b);
console.log(Color[2]);
