var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickGood = function (e) {
        console.log('clicked!');
    };
    return Handler;
}());
var Handler2 = /** @class */ (function () {
    function Handler2() {
        var _this = this;
        this.onClickGood = function (e) { _this.info = e.message; };
    }
    return Handler2;
}());
