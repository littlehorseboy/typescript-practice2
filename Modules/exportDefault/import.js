"use strict";
exports.__esModule = true;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var myValidator = new ZipCodeValidator_1["default"]();
var strings = ['Hello', '98052', '101'];
strings.forEach(function (s) { return console.log(s + " " + (StaticZipCodeValidator_1["default"](s) ? 'matches' : 'does not match')); });
