webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\".col-8\">\n      <div style=\"text-align:center\">\n        <h1>\n          Кто твой секретный Санта?\n          <br> Фаза {{phaseNum}}: {{phaseName}}\n        </h1>\n      </div>\n      <app-auth [phaseNum]=\"phaseNum\"></app-auth>\n      <app-santa [phaseNum]=\"phaseNum\"></app-santa>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.phaseNum = 1;
        this.phaseName = 'регистрация';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__santa_santa_component__ = __webpack_require__("../../../../../src/app/santa/santa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var firebaseConfig = {
    apiKey: "AIzaSyAva_-5yLUpqD8_pP3fhEl7gD9RzcHFe1E",
    authDomain: "secretsanta-2018.firebaseapp.com",
    databaseURL: "https://secretsanta-2018.firebaseio.com",
    projectId: "secretsanta-2018",
    storageBucket: "secretsanta-2018.appspot.com",
    messagingSenderId: "442286155863"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_8__santa_santa_component__["a" /* SantaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authenticated\" id=\"accordion\" role=\"tablist\">\n  <div *ngIf=\"error!=''\" class=\"alert alert-danger\">\n    {{error}}\n  </div>  \n  <div class=\"card\">\n    <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Вход\n        </a>\n      </h5>\n    </div>\n\n    <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label>Email: </label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter email\">\n          </div>  \n          <div class=\"form-group\">\n              <label>Password:</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter password\">\n          </div>  \n          <button (click)=\"Login()\" class=\"btn btn-primary\">Login</button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"phaseNum==1\" class=\"card\">\n    <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n      <h5 class=\"mb-0\">\n        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n          Регистрация\n        </a>\n      </h5>\n    </div>\n    <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n          <div class=\"form-group\">\n              <label>Имя:</label>\n              <input type=\"required\" class=\"form-control\" [(ngModel)]=\"firstname\" placeholder=\"Имя\">\n          </div>  \n          <div class=\"form-group\">\n              <label>Фамилия:</label>\n              <input type=\"required\" class=\"form-control\" [(ngModel)]=\"lastname\" placeholder=\"Фамилия\">\n          </div>  \n          <div class=\"form-group\">\n              <label>Email: </label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter email\">\n            </div>  \n            <div class=\"form-group\">\n                <label>Password:</label>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter password\">\n            </div>  \n            <button (click)=\"Register()\" class=\"btn btn-primary\">Регистрация</button>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(afAuth, afDb) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.authenticated = false;
        this.inAuthState = false;
        this.error = '';
        this.email = '';
        this.password = '';
        this.firstname = '';
        this.lastname = '';
        this.user = this.afAuth.authState;
        var self = this;
        this.user.subscribe(function (state) {
            self.authenticated = state != null;
            self.inAuthState = false;
            console.log(state);
        }, function (error) {
            self.inAuthState = false;
            self.authenticated = false;
            self.error = error;
            console.log(error);
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.Login = function () {
        this.inAuthState = true;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    };
    AuthComponent.prototype.Register = function () {
        this.inAuthState = true;
        var self = this;
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (newuser) {
            self.afDb.database.ref("/users/" + newuser.uid).update({ firstname: self.firstname, lastname: self.lastname });
        }).catch(function (error) { self.error = error; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], AuthComponent.prototype, "phaseNum", void 0);
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/santa/santa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/santa/santa.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authenticated\">\n  <div *ngIf=\"inLoadingState\" class=\"alert alert-primary\" role=\"alert\">\n      Загрузка....\n  </div>\n  <div *ngIf=\"onError\" class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <div *ngIf=\"!inLoadingState\" class=\"card\" style=\"width: 40rem;\">\n    <h4 class=\"card-header\">Ты секретный Санта для:</h4>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{user.santa}}</h4>\n      <p class=\"card-text\">\n      </p>\n    </div>\n  </div>\n  <br>\n  <button type=\"button\" (click)=\"Logout()\" class=\"btn btn-warning\">Выход</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/santa/santa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = (function () {
    function User() {
    }
    return User;
}());
var SantaComponent = (function () {
    function SantaComponent(afAuth, afDb) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.inLoadingState = true;
        this.authenticated = false;
        this.onError = false;
        this.auser = afAuth.authState;
        var self = this;
        this.auser.subscribe(function (auser) {
            self.authenticated = auser != null;
            if (!self.authenticated)
                return;
            self.afDb.object("/users/" + auser.uid).valueChanges().subscribe(function (user) {
                console.log(user);
                self.inLoadingState = false;
                self.user = user;
                if (self.user.santa == null || self.user.santa == '')
                    self.user.santa = 'не назначен';
            }, self.errorHandler);
        }, self.errorHandler);
    }
    SantaComponent.prototype.errorHandler = function (error) {
        this.onError = true;
        this.error = error;
        console.log(error);
    };
    SantaComponent.prototype.ngOnInit = function () {
        this.inLoadingState = true;
        this.authenticated = false;
    };
    SantaComponent.prototype.Logout = function () {
        this.afAuth.auth.signOut();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SantaComponent.prototype, "phaseNum", void 0);
    SantaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-santa',
            template: __webpack_require__("../../../../../src/app/santa/santa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/santa/santa.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SantaComponent);
    return SantaComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map