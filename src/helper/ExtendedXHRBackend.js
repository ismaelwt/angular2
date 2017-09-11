"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var ExtendedXHRBackend = /** @class */ (function (_super) {
    __extends(ExtendedXHRBackend, _super);
    function ExtendedXHRBackend(browserXhr, baseResponseOptions, xsrfStrategy) {
        var _this = _super.call(this, browserXhr, baseResponseOptions, xsrfStrategy) || this;
        _this.baseResponseOptions = baseResponseOptions;
        return _this;
    }
    ExtendedXHRBackend.prototype.createConnection = function (request) {
        var token = localStorage.getItem('token');
        request.headers.set('x-access-token', "" + token);
        request.headers.set('Content-Type', 'application/json');
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if (error.status === 401 || error.status === 403) {
                console.log('acesso não autorizado');
                localStorage.removeItem('token');
            }
            return Observable_1.Observable.throw(error);
        });
        return xhrConnection;
    };
    ExtendedXHRBackend = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.BrowserXhr, http_1.ResponseOptions,
            http_1.XSRFStrategy])
    ], ExtendedXHRBackend);
    return ExtendedXHRBackend;
}(http_1.XHRBackend));
exports.ExtendedXHRBackend = ExtendedXHRBackend;
//# sourceMappingURL=ExtendedXHRBackend.js.map