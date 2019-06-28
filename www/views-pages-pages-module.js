(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-pages-module"],{

/***/ "./src/app/views/pages/login/index.ts":
/*!********************************************!*\
  !*** ./src/app/views/pages/login/index.ts ***!
  \********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/views/pages/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/views/pages/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/pages/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding style=\"background-image: url(../../../assets/images/background.png); height: 100vh;\">\n  <div style=\"height: calc(60vh - 281px);\">\n  </div>\n  <div class=\"text-center\">\n    <img src=\"../../../assets/images/logo.png\">\n  </div>\n  <div>\n    <ion-input placeholder=\"  Email or Username\" [(ngModel)]=\"name\"></ion-input>\n    <ion-input placeholder=\"  Password\" class=\"space-top-12\" [(ngModel)]=\"password\"></ion-input>\n  </div>\n  <div class=\"link-item center space-top-12\" style=\"width: 60%;\" (click)=\"onLogin()\">\n    Log in\n  </div>\n  <div class=\"space-top-12 line\"></div>\n  <div class=\"space-top-12 text-center\" style=\"color: white;\" routerLink=\"/signup\">Sign Up</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/login/login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loginService.login(this.name, this.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.user = {
                id: data['number'],
                name: data['name'],
                email: data['email'],
                email_verified_at: data['email_verified_at'],
                api_token: data['api_token'],
                created_at: data['created_at'],
                updated_at: data['updated_at'],
                privilege: data['privilege'],
                username: data['username'],
                university: data['university'],
                bio: data['bio'],
                profile: data['profile'],
            };
            console.log('success');
            _this.router.navigate(["/main/home"]);
        }, function (error) {
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/pages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/pages/pages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/views/pages/login/index.ts");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin */ "./src/app/views/pages/signin/index.ts");





var routes = [
    {
        path: 'login',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signin__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/pages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/pages/pages.module.ts ***!
  \*********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/views/pages/pages-routing.module.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ "./src/app/views/pages/login/index.ts");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin */ "./src/app/views/pages/signin/index.ts");









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signin__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/views/pages/signin/index.ts":
/*!*********************************************!*\
  !*** ./src/app/views/pages/signin/index.ts ***!
  \*********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component */ "./src/app/views/pages/signin/signin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return _signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]; });




/***/ }),

/***/ "./src/app/views/pages/signin/signin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/signin/signin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding>\n  <div class=\"text-center\">\n    <img src=\"../../../assets/images/logo1.png\">\n  </div>\n  <div>\n    <ion-select placeholder=\"Account Type\" class=\"space-top-12\" [(ngModel)]=\"account_type\">\n      <ion-select-option value=\"1\">Student</ion-select-option>\n      <ion-select-option value=\"2\">Organization</ion-select-option>\n    </ion-select>\n    <ion-select placeholder=\"University\" class=\"space-top-12\" [(ngModel)]=\"university_id\">\n      <ion-select-option *ngFor=\"let item of university\" value=\"{{ item.id }}\">{{ item.name }}</ion-select-option>\n    </ion-select>\n    <ion-input class=\"space-top-12\" placeholder=\"Full Name\" [(ngModel)]=\"name\"></ion-input>\n    <ion-input class=\"space-top-12\" placeholder=\"User Name\" [(ngModel)]=\"username\"></ion-input>\n    <ion-input class=\"space-top-12\" placeholder=\"University Email\" [(ngModel)]=\"email\"></ion-input>\n    <ion-input class=\"space-top-12\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n  </div>\n  <div class=\"link-item center space-top-12\" style=\"width: 60%;\" (click)=\"onSignin();\">\n    Sign in\n  </div>\n  <div class=\"space-top-12 text-center\">By signing up, you are agree to our Terms and Privacy Policy</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/signin/signin.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/signin/signin.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/signin/signin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/signin/signin.component.ts ***!
  \********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/university.service */ "./src/app/services/university.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");






var SigninComponent = /** @class */ (function () {
    function SigninComponent(loginService, universityService, router, toastController) {
        this.loginService = loginService;
        this.universityService = universityService;
        this.router = router;
        this.toastController = toastController;
        this.university = [];
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.loginService.currentUserValue;
        this.universityService.getUniversities()
            .subscribe(function (res) {
            _this.university = res;
            console.log(_this.university);
        }, function (err) {
            console.log(err);
        });
    };
    SigninComponent.prototype.onSignin = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('account_type', this.account_type.toString());
        formData.append('university', this.university_id.toString());
        formData.append('name', this.name);
        formData.append('username', this.username);
        formData.append('email', this.email);
        formData.append('password', this.password);
        formData.append('password_confirmation', this.password);
        this.loginService.signin(formData).subscribe(function (response) {
            console.log('ok');
            _this.user = {
                id: response['id'],
                name: response['name'],
                email: response['email'],
                email_verified_at: response['email_verified_at'],
                api_token: response['api_token'],
                created_at: response['created_at'],
                updated_at: response['updated_at'],
                privilege: response['privilege'],
                username: response['username'],
                university: response['university'],
                bio: response['bio'],
                profile: response['profile'],
            };
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            _this.router.navigate(["/main/home"]);
        }, function (error) {
            _this.showToast('Error!');
        });
    };
    SigninComponent.prototype.showToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/views/pages/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/views/pages/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _services_university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-pages-module.js.map