var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TESTA = /** @class */ (function () {
    function TESTA(aname) {
        this.aname = aname;
    }
    return TESTA;
}());
var TESTB = /** @class */ (function (_super) {
    __extends(TESTB, _super);
    function TESTB(bname) {
        var _this = _super.call(this, 'TESTAAAAA') || this;
        _this.bname = bname;
        return _this;
    }
    return TESTB;
}(TESTA));
var TESTC = /** @class */ (function (_super) {
    __extends(TESTC, _super);
    function TESTC(cname) {
        var _this = _super.call(this, 'TESTBBBBB') || this;
        _this.cname = cname;
        return _this;
    }
    return TESTC;
}(TESTB));
var ccccc = new TESTC('TESTCCCCC');
console.log(ccccc.aname, ccccc.bname, ccccc.cname);
