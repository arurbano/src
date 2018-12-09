(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<div class=\"container\" id=\"container\">\n    \n\n        <div id=\"loader-wrapper\">\n            \n            <div id=\"loader\"></div>\n            \n                <div class=\"loader-section section-left\"></div>\n                <div class=\"loader-section section-right\"></div>\n            \n            </div>\n\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService /*, private router: Router*/) {
        var _this = this;
        this.authService = authService;
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user != null) {
                // User is logged in, use the user object for its info.
                _this.isLoggedIn = true;
                _this.user_displayName = user.displayName;
                _this.user_email = user.email;
                console.log('logged ON');
                // etc.
            }
            else {
                // User is not logged in, redirect to where you need to.
                _this.isLoggedIn = false;
                console.log('No logged on');
            }
            // document.body.classList.add('loaded');
            document.getElementById('container').classList.add('loaded');
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__["AutenticacionService"] /*, private router: Router*/])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _servicios_peces_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios/peces.service */ "./src/app/servicios/peces.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _peces_peces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./peces/peces.component */ "./src/app/peces/peces.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _peces_addpez_addpez_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./peces/addpez/addpez.component */ "./src/app/peces/addpez/addpez.component.ts");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _autenticacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autenticacion/registro/registro.component */ "./src/app/autenticacion/registro/registro.component.ts");
/* harmony import */ var _autenticacion_inises_inises_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./autenticacion/inises/inises.component */ "./src/app/autenticacion/inises/inises.component.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _peces_editpez_editpez_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./peces/editpez/editpez.component */ "./src/app/peces/editpez/editpez.component.ts");
/* harmony import */ var _servicios_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./servicios/guard.service */ "./src/app/servicios/guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__["InicioComponent"] },
    { path: 'peces', component: _peces_peces_component__WEBPACK_IMPORTED_MODULE_7__["PecesComponent"], canActivate: [_servicios_guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"]] },
    { path: 'addpez', component: _peces_addpez_addpez_component__WEBPACK_IMPORTED_MODULE_10__["AddpezComponent"], canActivate: [_servicios_guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"]] },
    { path: 'editpez/:key', component: _peces_editpez_editpez_component__WEBPACK_IMPORTED_MODULE_19__["EditpezComponent"], canActivate: [_servicios_guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"]] },
    { path: 'registro', component: _autenticacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"] },
    { path: 'iniciosesion', component: _autenticacion_inises_inises_component__WEBPACK_IMPORTED_MODULE_13__["InisesComponent"] },
    { path: '**', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__["InicioComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _peces_peces_component__WEBPACK_IMPORTED_MODULE_7__["PecesComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__["InicioComponent"],
                _peces_addpez_addpez_component__WEBPACK_IMPORTED_MODULE_10__["AddpezComponent"],
                _autenticacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"],
                _autenticacion_inises_inises_component__WEBPACK_IMPORTED_MODULE_13__["InisesComponent"],
                _peces_editpez_editpez_component__WEBPACK_IMPORTED_MODULE_19__["EditpezComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            ],
            providers: [_servicios_peces_service__WEBPACK_IMPORTED_MODULE_5__["PecesService"], _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_11__["AutenticacionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/autenticacion/inises/inises.component.css":
/*!***********************************************************!*\
  !*** ./src/app/autenticacion/inises/inises.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#inicio{\r\n    background-color: #1874d2;\r\n    color: black;\r\n}\r\n#google{\r\n    background-color: #1874d2;\r\n    color: black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0ZW50aWNhY2lvbi9pbmlzZXMvaW5pc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRlbnRpY2FjaW9uL2luaXNlcy9pbmlzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbmljaW97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3NGQyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiNnb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3NGQyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/autenticacion/inises/inises.component.html":
/*!************************************************************!*\
  !*** ./src/app/autenticacion/inises/inises.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul></ul> \n<div class=\"row\">\n  <audio autoplay src=\"./assets/music/Blop.mp3\"></audio>\n  <div class=\"col-md-6 offset-md-3\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <h4>Introduzca los siguientes datos:</h4>\n      <label>Correo Electrónico</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" formControlName=\"email\" required autofocus>\n      <ul></ul> \n      <label>Contraseña</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" required>\n      <ul></ul> \n      <button type=\"submit\" class=\"btn btn-primary\" id=\"inicio\" [disabled]=\"!loginForm.valid\">Iniciar sesión</button>\n      <ul></ul> \n      <button class=\"btn btn-block btn-social btn-google\" id=\"google\" (click)='llamarGoogle()' >\n        <span class=\"fa fa-google\"></span> Sign in with Google\n      </button>\n    </form>\n    <ul></ul> \n    <p class=\"alert alert-danger\" *ngIf=\"mensaje\">\n      El usuario o contraseña no es correcto\n    </p>\n    <ul></ul> \n    <p>Si no dispone de cuenta pulse <a routerLink=\"/registro\">aquí</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/autenticacion/inises/inises.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/autenticacion/inises/inises.component.ts ***!
  \**********************************************************/
/*! exports provided: InisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InisesComponent", function() { return InisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InisesComponent = /** @class */ (function () {
    function InisesComponent(formBuilder, autService, router, activatedRouter) {
        this.formBuilder = formBuilder;
        this.autService = autService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.mensaje = false;
    }
    InisesComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]
            ]
        });
    };
    InisesComponent.prototype.llamarGoogle = function () {
        this.autService.doGoogleLogin();
    };
    InisesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userdata = this.saveUserdata();
        this.autService.inicioSesion(this.userdata);
        this.router.navigate(['/inicio']);
        setTimeout(function () {
            if (_this.isAuth() === false) {
                _this.mensaje = true;
            }
        }, 2000);
    };
    InisesComponent.prototype.saveUserdata = function () {
        var saveUserdata = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value,
        };
        return saveUserdata;
    };
    InisesComponent.prototype.isAuth = function () {
        return this.autService.isAuthenticated();
    };
    InisesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inises',
            template: __webpack_require__(/*! ./inises.component.html */ "./src/app/autenticacion/inises/inises.component.html"),
            styles: [__webpack_require__(/*! ./inises.component.css */ "./src/app/autenticacion/inises/inises.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], InisesComponent);
    return InisesComponent;
}());



/***/ }),

/***/ "./src/app/autenticacion/registro/registro.component.css":
/*!***************************************************************!*\
  !*** ./src/app/autenticacion/registro/registro.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    background-color: #1874d2;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0ZW50aWNhY2lvbi9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRlbnRpY2FjaW9uL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzRkMjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/autenticacion/registro/registro.component.html":
/*!****************************************************************!*\
  !*** ./src/app/autenticacion/registro/registro.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<audio autoplay src=\"./assets/music/Blop.mp3\"></audio>\n<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n    <form [formGroup]=\"registroForm\" (ngSubmit)=\"onSubmit()\">\n      <h4>Introduzca sus datos de registro</h4>\n      <label>Correo Electrónico</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" formControlName=\"email\" required autofocus>\n      <p class=\"alert alert-danger\" *ngIf=\"erroresForm.email\">\n        {{ erroresForm.email }}\n      </p>\n      <label>Contraseña</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" required>\n      <p class=\"alert alert-danger\" *ngIf=\"erroresForm.password\">\n        {{ erroresForm.password }}\n      </p>\n      <hr>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registroForm.valid\">Registrar</button>\n    </form>\n    <p>Si ya dispone de cuenta pulse <a routerLink=\"/iniciosesion\">aquí</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/autenticacion/registro/registro.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/autenticacion/registro/registro.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(formBuilder, autService, router, activatedRouter) {
        this.formBuilder = formBuilder;
        this.autService = autService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.erroresForm = {
            'email': '',
            'password': ''
        };
        this.mensajesValidacion = {
            'email': {
                'required': 'Email obligatorio',
                'email': 'Introduzca una dirección email correcta'
            },
            'password': {
                'required': 'Contraseña obligatoria',
                'pattern': 'La contraseña debe tener al menos una letra y un número ',
                'minlength': 'y más de 6 caracteres'
            }
        };
    }
    RegistroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registroForm = this.formBuilder.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]
            ]
        });
        this.registroForm.valueChanges.subscribe(function (data) {
            return _this.onValueChanged(data);
        });
        this.onValueChanged();
    };
    RegistroComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userdata = this.saveUserdata();
        this.autService.registroUsuario(this.userdata)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['/inicio']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    RegistroComponent.prototype.saveUserdata = function () {
        var saveUserdata = {
            email: this.registroForm.get('email').value,
            password: this.registroForm.get('password').value,
        };
        return saveUserdata;
    };
    RegistroComponent.prototype.onValueChanged = function (data) {
        if (!this.registroForm) {
            return;
        }
        var form = this.registroForm;
        // tslint:disable-next-line:forin
        for (var field in this.erroresForm) {
            this.erroresForm[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.mensajesValidacion[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.erroresForm[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/autenticacion/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/autenticacion/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\r\n    background-color: #ffffff;\r\n}\r\n\r\n#appquarium{\r\n    color: #1874d2;\r\n    font-size: xx-large;\r\n}\r\n\r\n#item{\r\n    color: #1874d2;\r\n    font-size: large;\r\n}\r\n\r\n.btn{\r\n    color: white;\r\n    background-color:#043463;\r\n}\r\n\r\n#loading{\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI2FwcHF1YXJpdW17XHJcbiAgICBjb2xvcjogIzE4NzRkMjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuI2l0ZW17XHJcbiAgICBjb2xvcjogIzE4NzRkMjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNDM0NjM7XHJcbn1cclxuXHJcbiNsb2FkaW5ne1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\n  <img id=\"loading\" src=\"./assets/imagenes/orcascargando.gif\">\n    <ul></ul>\n  <a class=\"navbar-brand\" id=\"appquarium\" href=\"#\">AppQuarium</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" \n      data-target=\"#navbarNav\" aria-controls=\"navbarNav\" \n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"isAuth()\">\n        <a class=\"nav-link\" id=\"item\" routerLink=\"/\">Inicio</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"isAuth()\">\n        <a class=\"nav-link\" id=\"item\" routerLink=\"/peces\">Mi acuario</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isAuth()\">\n        <button class=\"btn btn-primary float-md-right\" routerLink=\"/iniciosesion\">Inicie sesión</button>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isAuth()\"> \n        <button id=\"btnLogout\" class=\"btn btn-primary float-md-right\" (click)=\"onLogout()\">Cerrar sesión</button>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(autService, router, activatedRouter) {
        this.autService = autService;
        this.router = router;
        this.activatedRouter = activatedRouter;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isAuth = function () {
        return this.autService.isAuthenticated();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.autService.logout();
        this.router.navigate(['/inicio']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#medusa1{\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 10%;\r\n    width: 320px;\r\n    height: 520px;\r\n    margin:-60px 0 0 -10px;\r\n    -webkit-animation: action 1s infinite  alternate;\r\n    animation: action 1s infinite  alternate;\r\n}\r\n\r\n#medusa2 {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 40%;\r\n    width: 320px;\r\n    height: 320px;\r\n    margin:-60px 0 0 -60px;\r\n    -webkit-animation: action 1s infinite  alternate;\r\n    animation: action 1s infinite  alternate;\r\n}\r\n\r\n#medusa3 {\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 60%;\r\n    width: 320px;\r\n    height: 320px;\r\n    margin:-60px 0 0 -60px;\r\n    -webkit-animation: action 1s infinite  alternate;\r\n    animation: action 1s infinite  alternate;\r\n}\r\n\r\n@-webkit-keyframes action {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-10px); transform: translateY(-10px); }\r\n}\r\n\r\n@keyframes action {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-10px); transform: translateY(-10px); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGlEQUFpRDtJQUNqRCx5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaURBQWlEO0lBQ2pELHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLEtBQUssaUNBQXlCLENBQXpCLHlCQUF5QixFQUFFO0lBQ2hDLE9BQU8scUNBQTZCLENBQTdCLDZCQUE2QixFQUFFO0NBQ3pDOztBQUNEO0lBQ0ksS0FBSyxpQ0FBeUIsQ0FBekIseUJBQXlCLEVBQUU7SUFDaEMsT0FBTyxxQ0FBNkIsQ0FBN0IsNkJBQTZCLEVBQUU7Q0FDekMiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI21lZHVzYTF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICBtYXJnaW46LTYwcHggMCAwIC0xMHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFjdGlvbiAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBhY3Rpb24gMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcclxufVxyXG5cclxuI21lZHVzYTIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgbWFyZ2luOi02MHB4IDAgMCAtNjBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhY3Rpb24gMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbjogYWN0aW9uIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbiNtZWR1c2EzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogNjAlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIG1hcmdpbjotNjBweCAwIDAgLTYwcHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYWN0aW9uIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IGFjdGlvbiAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYWN0aW9uIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgYWN0aW9uIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div id=\"contenedor\">\n    <ul></ul>\n<h1>Bienvenido a AppQuarium</h1>\n<ul></ul> \n<img id=\"medusa1\" src=\"./assets/imagenes/medusa.png\">\n<img id=\"medusa2\" src=\"./assets/imagenes/meds.png\">\n<img id=\"medusa3\" src=\"./assets/imagenes/med2.png\">\n</div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/peces/addpez/addpez.component.css":
/*!***************************************************!*\
  !*** ./src/app/peces/addpez/addpez.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n    border-left: 5px solid #a94442;\r\n   }\r\n\r\ninput.ng-valid.ng-dirty {\r\n    border-left: 5px solid #42A948;\r\n   }\r\n\r\n.check {\r\n    color: #42A948;\r\n   }\r\n\r\n.uncheck {\r\n    color: #a94442;\r\n   }\r\n\r\n.row{\r\n    padding-left: 5%;\r\n    padding-top: 5%;\r\n   }\r\n\r\n.btn{\r\n    background-color: #1874d2;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVjZXMvYWRkcGV6L2FkZHBlei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9COztBQUVKO0lBQ0ksK0JBQStCO0lBQy9COztBQUVKO0lBQ0ksZUFBZTtJQUNmOztBQUVKO0lBQ0ksZUFBZTtJQUNmOztBQUVKO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjs7QUFDRDtJQUNDLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGVjZXMvYWRkcGV6L2FkZHBlei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICAgfVxyXG5cclxuaW5wdXQubmctdmFsaWQubmctZGlydHkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gICB9XHJcblxyXG4uY2hlY2sge1xyXG4gICAgY29sb3I6ICM0MkE5NDg7XHJcbiAgIH1cclxuICAgXHJcbi51bmNoZWNrIHtcclxuICAgIGNvbG9yOiAjYTk0NDQyO1xyXG4gICB9XHJcblxyXG4ucm93e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgfVxyXG4gICAuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzRkMjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/peces/addpez/addpez.component.html":
/*!****************************************************!*\
  !*** ./src/app/peces/addpez/addpez.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <audio autoplay src=\"./assets/music/Town.mp3\"></audio>\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset 2\">\n    <h2>Añadir nueva especie</h2>\n    <a class=\"btn btn-primary float-md-right\" routerLink=\"/peces\">Regresar al acuario</a>\n    <br>\n    <form [formGroup]=\"this.pecesService.form\"  (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"form-group\">\n        <label for=\"reino\">Reino</label> &nbsp;\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.reino.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.reino.invalid &&\n        this.pecesService.form.controls.reino.touched\"></i>\n        <select class=\"form-control\" id=\"reino\" formControlName=\"reino\">\n          <option value=\"\">Seleccione...</option>\n          <option value=animales>Animalia</option>\n          <option value=plantas>Plantae</option>\n        </select>\n        <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.reino.invalid &&\n        this.pecesService.form.controls.reino.touched\">\n          El campo reino es obligatorio.\n        </p>\n      </div>\n\n<div class=\"form-group\">\n        <label for=\"especie\">Especie</label>&nbsp;\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.especie.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.especie.invalid &&\n        this.pecesService.form.controls.especie.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"especie\" formControlName=\"especie\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.especie.invalid &&\n        this.pecesService.form.controls.especie.touched\">\n          El campo especie es obligatorio.\n        </p>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"familia\">Familia</label>&nbsp;\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.familia.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.familia.invalid &&\n        this.pecesService.form.controls.familia.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"familia\" formControlName=\"familia\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.familia.invalid &&\n        this.pecesService.form.controls.familia.touched\">\n          El campo familia es obligatorio.\n        </p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"concepto\">Edad(en meses)</label>&nbsp;\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.edad.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.edad.invalid &&\n        this.pecesService.form.controls.edad.touched\"></i>\n        <input type=\"number\" class=\"form-control\" id=\"edad\" formControlName=\"edad\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.edad.invalid &&\n        this.pecesService.form.controls.edad.touched\">\n          El campo edad es obligatorio.\n        </p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"sexo\">Sexo</label>&nbsp;\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.sexo.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.sexo.invalid &&\n        this.pecesService.form.controls.sexo.touched\"></i>\n        <select class=\"form-control\" id=\"sexo\" formControlName=\"sexo\">\n          <option value=\"\">Seleccione...</option>\n          <option value=macho>Macho</option>\n          <option value=hembra>Hembra</option>\n          <option value=hermafrodita>Hermafrodita</option>\n          <option value=asexual>Asexual</option>\n        </select>\n        <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.sexo.invalid &&\n        this.pecesService.form.controls.sexo.touched\">\n          El campo sexo es obligatorio.\n        </p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"habitat\">Habitat Natural</label>&nbsp;\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.habitat.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.habitat.invalid &&\n        this.pecesService.form.controls.habitat.touched\"></i>\n        <select class=\"form-control\" id=\"habitat\" formControlName=\"habitat\">\n          <option value=\"\">Seleccione...</option>\n          <option value=salada>Agua salada</option>\n          <option value=dulce>Agua dulce</option>\n          <option value=salobre>Aguas salobres</option>\n        </select>\n        <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.habitat.invalid &&\n        this.pecesService.form.controls.habitat.touched\">\n          El campo habitat es obligatorio.\n        </p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"nutricion\">Tipo de nutrición</label>&nbsp;\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.nutricion.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.nutricion.invalid &&\n        this.pecesService.form.controls.nutricion.touched\"></i>\n        <select class=\"form-control\" id=\"nutricion\" formControlName=\"nutricion\">\n          <option value=\"\">Seleccione...</option>\n          <option value=herbivoro>Herbívora</option>\n          <option value=carnivoro>Carnívora</option>\n          <option value=omnivoro>Omnívora</option>\n          <option value=otro>Otras</option>\n        </select>\n        <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.nutricion.invalid &&\n        this.pecesService.form.controls.nutricion.touched\">\n          El campo nutricion es obligatorio.\n        </p>\n      </div>\n\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!this.pecesService.form.valid\">Añadir especie</button>\n      \n      <ul></ul>\n      \n      <p class=\"alert alert-danger\" *ngIf=\"!this.pecesService.form.valid\">\n        Por favor complete todos los campos\n      </p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/peces/addpez/addpez.component.ts":
/*!**************************************************!*\
  !*** ./src/app/peces/addpez/addpez.component.ts ***!
  \**************************************************/
/*! exports provided: AddpezComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpezComponent", function() { return AddpezComponent; });
/* harmony import */ var _servicios_peces_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../servicios/peces.service */ "./src/app/servicios/peces.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddpezComponent = /** @class */ (function () {
    function AddpezComponent(pf, pecesService) {
        this.pf = pf;
        this.pecesService = pecesService;
    }
    AddpezComponent.prototype.ngOnInit = function () {
    };
    AddpezComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.pecesService.form.valid) {
            if (this.pecesService.form.get('$key').value == null) {
                this.pecesService.insertPez(this.pecesService.form.value);
                this.showSuccessMessage = true;
                setTimeout(function () { return _this.showSuccessMessage = false; }, 3000);
                this.submitted = false;
                this.pecesService.form.reset();
                this.pecesService.form.setValue({
                    $key: null,
                    reino: '',
                    especie: '',
                    familia: '',
                    edad: '',
                    sexo: '',
                    habitat: '',
                    nutricion: ''
                });
            }
        }
    };
    AddpezComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpez',
            template: __webpack_require__(/*! ./addpez.component.html */ "./src/app/peces/addpez/addpez.component.html"),
            styles: [__webpack_require__(/*! ./addpez.component.css */ "./src/app/peces/addpez/addpez.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _servicios_peces_service__WEBPACK_IMPORTED_MODULE_0__["PecesService"]])
    ], AddpezComponent);
    return AddpezComponent;
}());



/***/ }),

/***/ "./src/app/peces/editpez/editpez.component.css":
/*!*****************************************************!*\
  !*** ./src/app/peces/editpez/editpez.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n    border-left: 5px solid #a94442;\r\n   }\r\n\r\ninput.ng-valid.ng-dirty {\r\n    border-left: 5px solid #42A948;\r\n   }\r\n\r\n.check {\r\n    color: #42A948;\r\n   }\r\n\r\n.uncheck {\r\n    color: #a94442;\r\n   }\r\n\r\n.row{\r\n    padding-left: 5%;\r\n    padding-top: 5%;\r\n   }\r\n\r\n.btn{\r\n    background-color: #1874d2;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVjZXMvZWRpdHBlei9lZGl0cGV6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0I7O0FBRUo7SUFDSSwrQkFBK0I7SUFDL0I7O0FBRUo7SUFDSSxlQUFlO0lBQ2Y7O0FBRUo7SUFDSSxlQUFlO0lBQ2Y7O0FBRUo7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCOztBQUNEO0lBQ0MsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9wZWNlcy9lZGl0cGV6L2VkaXRwZXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgIH1cclxuXHJcbmlucHV0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcclxuICAgfVxyXG5cclxuLmNoZWNrIHtcclxuICAgIGNvbG9yOiAjNDJBOTQ4O1xyXG4gICB9XHJcbiAgIFxyXG4udW5jaGVjayB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICAgfVxyXG5cclxuLnJvd3tcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgIH1cclxuICAgLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODc0ZDI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/peces/editpez/editpez.component.html":
/*!******************************************************!*\
  !*** ./src/app/peces/editpez/editpez.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <audio autoplay src=\"./assets/music/Shop.mp3\"></audio>\n<div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset 2\">\n  <h2>Actualizando la especie seleccionada</h2>\n  <a class=\"btn btn-primary float-md-right\" routerLink=\"/peces\">Regresar al acuario</a>\n  <br>\n  <form [formGroup]=\"this.pecesService.form\"  (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n      <label for=\"reino\">Reino</label> &nbsp;\n      <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.reino.valid\"></i>\n      <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.reino.invalid &&\n      this.pecesService.form.controls.reino.touched\"></i>\n      <select class=\"form-control\" id=\"reino\" formControlName=\"reino\">\n        <option value=\"\">Seleccione...</option>\n        <option value=animales>Animalia</option>\n        <option value=plantas>Plantae</option>\n      </select>\n      <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.reino.invalid &&\n      this.pecesService.form.controls.reino.touched\">\n        El campo reino es obligatorio.\n      </p>\n    </div>\n\n<div class=\"form-group\">\n      <label for=\"especie\">Especie</label>&nbsp;\n      <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.especie.valid\"></i>\n      <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.especie.invalid &&\n      this.pecesService.form.controls.especie.touched\"></i>\n      <input type=\"text\" class=\"form-control\" id=\"especie\" formControlName=\"especie\">\n      <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.especie.invalid &&\n      this.pecesService.form.controls.especie.touched\">\n        El campo especie es obligatorio.\n      </p>\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"familia\">Familia</label>&nbsp;\n      <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.familia.valid\"></i>\n      <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.familia.invalid &&\n      this.pecesService.form.controls.familia.touched\"></i>\n      <input type=\"text\" class=\"form-control\" id=\"familia\" formControlName=\"familia\">\n      <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.familia.invalid &&\n      this.pecesService.form.controls.familia.touched\">\n        El campo familia es obligatorio.\n      </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"concepto\">Edad(en meses)</label>&nbsp;\n      <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.edad.valid\"></i>\n      <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.edad.invalid &&\n      this.pecesService.form.controls.edad.touched\"></i>\n      <input type=\"number\" class=\"form-control\" id=\"edad\" formControlName=\"edad\">\n      <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.edad.invalid &&\n      this.pecesService.form.controls.edad.touched\">\n        El campo edad es obligatorio.\n      </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sexo\">Sexo</label>&nbsp;\n      <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.sexo.valid\"></i>\n      <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.sexo.invalid &&\n      this.pecesService.form.controls.sexo.touched\"></i>\n      <select class=\"form-control\" id=\"sexo\" formControlName=\"sexo\">\n        <option value=\"\">Seleccione...</option>\n        <option value=macho>Macho</option>\n        <option value=hembra>Hembra</option>\n        <option value=hermafrodita>Hermafrodita</option>\n        <option value=asexual>Asexual</option>\n      </select>\n      <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.sexo.invalid &&\n      this.pecesService.form.controls.sexo.touched\">\n        El campo sexo es obligatorio.\n      </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"habitat\">Habitat Natural</label>&nbsp;\n      <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.habitat.valid\"></i>\n      <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.habitat.invalid &&\n      this.pecesService.form.controls.habitat.touched\"></i>\n      <select class=\"form-control\" id=\"habitat\" formControlName=\"habitat\">\n        <option value=\"\">Seleccione...</option>\n        <option value=salada>Agua salada</option>\n        <option value=dulce>Agua dulce</option>\n        <option value=salobre>Aguas salobres</option>\n      </select>\n      <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.habitat.invalid &&\n      this.pecesService.form.controls.habitat.touched\">\n        El campo habitat es obligatorio.\n      </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"nutricion\">Tipo de nutrición</label>&nbsp;\n      <i class=\"fa fa-check-circle check\" *ngIf=\"this.pecesService.form.controls.nutricion.valid\"></i>\n      <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.pecesService.form.controls.nutricion.invalid &&\n      this.pecesService.form.controls.nutricion.touched\"></i>\n      <select class=\"form-control\" id=\"nutricion\" formControlName=\"nutricion\">\n        <option value=\"\">Seleccione...</option>\n        <option value=herbivoro>Herbívora</option>\n        <option value=carnivoro>Carnívora</option>\n        <option value=omnivoro>Omnívora</option>\n        <option value=otro>Otras</option>\n      </select>\n      <p class=\"alert alert-danger\" *ngIf=\"this.pecesService.form.controls.nutricion.invalid &&\n      this.pecesService.form.controls.nutricion.touched\">\n        El campo nutricion es obligatorio.\n      </p>\n    </div>\n\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!this.pecesService.form.valid\" (click)=\"guardarCambios()\">Guardar Cambios</button>\n    \n    <ul></ul>\n    \n    <p class=\"alert alert-danger\" *ngIf=\"!this.pecesService.form.valid\">\n      Por favor complete todos los campos\n    </p>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/peces/editpez/editpez.component.ts":
/*!****************************************************!*\
  !*** ./src/app/peces/editpez/editpez.component.ts ***!
  \****************************************************/
/*! exports provided: EditpezComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpezComponent", function() { return EditpezComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_peces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../servicios/peces.service */ "./src/app/servicios/peces.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditpezComponent = /** @class */ (function () {
    function EditpezComponent(pf, pecesService, router) {
        this.pf = pf;
        this.pecesService = pecesService;
        this.router = router;
    }
    EditpezComponent.prototype.ngOnInit = function () {
    };
    EditpezComponent.prototype.guardarCambios = function () {
        this.pecesService.updatePez(this.pecesService.form.value);
        this.router.navigate(['/peces']);
        this.pecesService.form.setValue({
            $key: null,
            reino: '',
            especie: '',
            familia: '',
            edad: '',
            sexo: '',
            habitat: '',
            nutricion: ''
        });
    };
    EditpezComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-editpez',
            template: __webpack_require__(/*! ./editpez.component.html */ "./src/app/peces/editpez/editpez.component.html"),
            styles: [__webpack_require__(/*! ./editpez.component.css */ "./src/app/peces/editpez/editpez.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _servicios_peces_service__WEBPACK_IMPORTED_MODULE_1__["PecesService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], EditpezComponent);
    return EditpezComponent;
}());



/***/ }),

/***/ "./src/app/peces/peces.component.css":
/*!*******************************************!*\
  !*** ./src/app/peces/peces.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n  margin-top:40px;\r\n  margin-left: 0.5%;\r\n  background-color: white;  \r\n  color: #043463;\r\n  width: 99%;\r\n}\r\n#añadir{\r\n    margin-right: 15%;\r\n    background-color: #1874d2;\r\n    color: black;\r\n}\r\n.h3{\r\n  padding: 40px;\r\n  margin:40px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVjZXMvcGVjZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixXQUFXO0NBQ1o7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjtBQUNEO0VBQ0UsY0FBYztFQUNkLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3BlY2VzL3BlY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XHJcbiAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXHJcbiAgY29sb3I6ICMwNDM0NjM7XHJcbiAgd2lkdGg6IDk5JTtcclxufVxyXG4jYcOxYWRpcntcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzRkMjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uaDN7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBtYXJnaW46NDBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/peces/peces.component.html":
/*!********************************************!*\
  !*** ./src/app/peces/peces.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Listado de especies en el acuario</h3>\n<a class=\"btn btn-primary float-md-right\" id=\"añadir\" routerLink=\"/addpez\">Añadir nueva especie</a>\n<br>\n<table class=\"table table-bordered table-striped tabla\" >\n  <thead>\n    <tr class=\"filters\">\n      <th>Reino</th>\n      <th>Especie</th>\n      <th>Familia</th>\n      <th>Edad(en meses)</th>\n      <th>Sexo</th>\n      <th>Hábitat</th>\n      <th>Nutrición</th>\n      <th>Eliminar</th>\n      <th>Editar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let peces of peces\">\n      <td>{{ peces.reino }}</td>\n      <td>{{ peces.especie }}</td>\n      <td>{{ peces.familia }}</td>\n      <td>{{ peces.edad }}</td>\n      <td>{{ peces.sexo }}</td>\n      <td>{{ peces.habitat }}</td>\n      <td>{{ peces.nutricion }}</td>\n      <td>\n        <button class=\"btn btn-danger\" (click)=\"onDelete(peces.$key)\">Liberar</button>\n      </td>\n      <audio autoplay src=\"./assets/music/Home.mp3\"></audio> \n      <td>\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/editpez/{{ peces.$key }}\" (click)=\"pecesService.rellenar(peces)\">Actualizar</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<div class=\"alert alert-danger\" *ngIf=\"showDeletedMessage\">\n  Liberación realizada con éxito.\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/peces/peces.component.ts":
/*!******************************************!*\
  !*** ./src/app/peces/peces.component.ts ***!
  \******************************************/
/*! exports provided: PecesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecesComponent", function() { return PecesComponent; });
/* harmony import */ var _servicios_peces_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../servicios/peces.service */ "./src/app/servicios/peces.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PecesComponent = /** @class */ (function () {
    function PecesComponent(pecesService) {
        this.pecesService = pecesService;
        this.peces = [];
        // tslint:disable-next-line:no-inferrable-types
        this.searchText = '';
    }
    PecesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pecesService.getPeces().subscribe(function (list) {
            _this.peces = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    PecesComponent.prototype.onDelete = function ($key) {
        var _this = this;
        if (confirm('¿De verdad quieres liberar a esta especie?')) {
            this.pecesService.deletePez($key);
            this.showDeletedMessage = true;
            setTimeout(function () { return _this.showDeletedMessage = false; }, 3000);
        }
    };
    PecesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-peces',
            template: __webpack_require__(/*! ./peces.component.html */ "./src/app/peces/peces.component.html"),
            styles: [__webpack_require__(/*! ./peces.component.css */ "./src/app/peces/peces.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_peces_service__WEBPACK_IMPORTED_MODULE_0__["PecesService"]])
    ], PecesComponent);
    return PecesComponent;
}());



/***/ }),

/***/ "./src/app/servicios/autenticacion.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/autenticacion.service.ts ***!
  \****************************************************/
/*! exports provided: AutenticacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionService", function() { return AutenticacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutenticacionService = /** @class */ (function () {
    function AutenticacionService(router, activatedRouter, afAuth) {
        var _this = this;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.afAuth = afAuth;
        this.userDetails = null;
        this.user = afAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                console.log('NO entiendo nada, si dentro');
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                console.log('fuera');
                _this.userDetails = null;
            }
        });
    }
    AutenticacionService.prototype.registroUsuario = function (userdata) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(userdata.email, userdata.password);
    };
    AutenticacionService.prototype.inicioSesion = function (userdata) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(userdata.email, userdata.password);
    };
    AutenticacionService.prototype.isAuthenticated = function () {
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    AutenticacionService.prototype.logout = function () {
        this.userDetails = null;
        this.user = null;
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    AutenticacionService.prototype.isLogged = function () {
        return this.afAuth.authState;
    };
    AutenticacionService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth.signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
                _this.router.navigate(['/peces']);
            });
        });
    };
    AutenticacionService.prototype.getUser = function () {
        if (firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser) {
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.email;
        }
        else {
            return null;
        }
    };
    AutenticacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AutenticacionService);
    return AutenticacionService;
}());



/***/ }),

/***/ "./src/app/servicios/guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicios/guard.service.ts ***!
  \********************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var _autenticacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuardService = /** @class */ (function () {
    function GuardService(authenticacionService) {
        this.authenticacionService = authenticacionService;
        this.res = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.res = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    // soluciona todo el tema de la recarga a inicio
    GuardService.prototype.canActivate = function (route, state) {
        return this.authenticacionService.isLogged().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                return true;
            }
            else {
                return false;
            }
        }));
    };
    GuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__["AutenticacionService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/servicios/peces.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicios/peces.service.ts ***!
  \********************************************/
/*! exports provided: PecesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecesService", function() { return PecesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PecesService = /** @class */ (function () {
    function PecesService(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            reino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            especie: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            familia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            habitat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nutricion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    PecesService.prototype.getPeces = function () {
        this.listapeces = this.firebase.list('peces');
        return this.listapeces.snapshotChanges();
    };
    PecesService.prototype.insertPez = function (peces) {
        this.listapeces.push({
            reino: peces.reino,
            especie: peces.especie,
            familia: peces.familia,
            edad: peces.edad,
            sexo: peces.sexo,
            habitat: peces.habitat,
            nutricion: peces.nutricion
        });
    };
    PecesService.prototype.rellenar = function (peces) {
        this.form.setValue(peces);
    };
    PecesService.prototype.updatePez = function (peces) {
        this.listapeces.update(peces.$key, {
            reino: peces.reino,
            especie: peces.especie,
            familia: peces.familia,
            edad: peces.edad,
            sexo: peces.sexo,
            habitat: peces.habitat,
            nutricion: peces.nutricion
        });
    };
    PecesService.prototype.deletePez = function ($key) {
        this.listapeces.remove($key);
    };
    PecesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], PecesService);
    return PecesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAUr30CBEyHPvd1BI0MFr5RMhROsitgtHE',
        authDomain: 'appquarium-d475c.firebaseapp.com',
        databaseURL: 'https://appquarium-d475c.firebaseio.com',
        projectId: 'appquarium-d475c',
        storageBucket: 'appquarium-d475c.appspot.com',
        messagingSenderId: '625227264686'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\usuario\Desktop\Desarrollo de Interfaces\Cositas angular\AppQuarium\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map