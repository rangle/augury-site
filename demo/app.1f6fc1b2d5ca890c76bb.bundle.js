webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Load Global Styles
	var router_deprecated_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(4);
	var platform_browser_dynamic_1 = __webpack_require__(263);
	var kitchen_sink_1 = __webpack_require__(357);
	var todo_service_1 = __webpack_require__(381);
	platform_browser_dynamic_1.bootstrap(kitchen_sink_1.default, [
	    router_deprecated_1.ROUTER_PROVIDERS,
	    common_1.FORM_DIRECTIVES,
	    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
	    core_1.provide(common_1.APP_BASE_HREF, { useValue: '' }),
	    todo_service_1.TodoService,
	    todo_service_1.FormatService
	]);


/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_deprecated_1 = __webpack_require__(1);
	var camelcase_1 = __webpack_require__(358);
	var home_1 = __webpack_require__(359);
	var start_1 = __webpack_require__(360);
	var input_output_1 = __webpack_require__(369);
	var my_form_1 = __webpack_require__(371);
	var form2_1 = __webpack_require__(372);
	var dynamic_controls_1 = __webpack_require__(373);
	var control_form_1 = __webpack_require__(378);
	var todo_app_1 = __webpack_require__(379);
	var di_tree_1 = __webpack_require__(383);
	var change_detection_1 = __webpack_require__(394);
	var angular_directives_1 = __webpack_require__(399);
	var demo_1 = __webpack_require__(407);
	var KitchenSink = (function () {
	    function KitchenSink(router) {
	        var _this = this;
	        this.router = router;
	        this.path = '';
	        router.subscribe(function (val) {
	            _this.path = val.instruction.urlPath;
	        });
	    }
	    KitchenSink = __decorate([
	        router_deprecated_1.RouteConfig([
	            { path: '/', component: home_1.default, name: 'Home' },
	            { path: '/input-output', component: input_output_1.default, name: 'InputOutput' },
	            { path: '/my-form', component: my_form_1.default, name: 'MyForm' },
	            { path: '/form2', component: form2_1.default, name: 'Form2' },
	            { path: '/control-form', component: control_form_1.default, name: 'ControlForm' },
	            { path: '/start/...', component: start_1.default, name: 'Start' },
	            { path: '/dynamic-controls', component: dynamic_controls_1.default,
	                name: 'DynamicControls' },
	            { path: '/todo-app', component: todo_app_1.default, name: 'TodoApp' },
	            { path: '/di-tree', component: di_tree_1.default, name: 'DITree' },
	            { path: '/angular-directives', component: angular_directives_1.default,
	                name: 'AngularDirectives' },
	            { path: '/change-detection', component: change_detection_1.default,
	                name: 'ChangeDetection' },
	            { path: '/demo', component: demo_1.default, name: 'DemoForNgConf' }
	        ]),
	        core_1.Component({
	            selector: 'kitchen-sink',
	            directives: [router_deprecated_1.RouterLink, router_deprecated_1.ROUTER_DIRECTIVES],
	            pipes: [camelcase_1.CamelCasePipe],
	            template: "\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <ul class=\"nav nav-pills nav-stacked\">\n      <li [ngClass]=\"{active: path==''}\">\n        <a [routerLink]=\"['./Home']\">Home</a>\n      </li>\n      <li [ngClass]=\"{active: path=='demo'}\">\n        <a [routerLink]=\"['./DemoForNgConf']\">Demo</a>\n      </li>\n      <li [ngClass]=\"{active: path=='control-form'}\">\n        <a [routerLink]=\"['./ControlForm']\">ControlForm</a>\n      </li>\n      <li [ngClass]=\"{active: path=='my-form'}\">\n        <a [routerLink]=\"['./MyForm']\">Form Component</a>\n      </li>\n      <li [ngClass]=\"{active: path=='form2'}\">\n        <a [routerLink]=\"['./Form2']\">NgModel Form</a>\n      </li>\n      <li [ngClass]=\"{active: path=='input-output'}\">\n        <a [routerLink]=\"['./InputOutput']\">InputOutput</a>\n      </li>\n      <li [ngClass]=\"{active: path.indexOf('start') > -1}\">\n        <a [routerLink]=\"['./Start', 'StartMain']\">Router</a>\n      </li>\n      <li [ngClass]=\"{active: path=='dynamic-controls'}\">\n        <a [routerLink]=\"['./DynamicControls']\">DynamicControls</a>\n      </li>\n      <li [ngClass]=\"{active: path=='todo-app'}\">\n        <a [routerLink]=\"['./TodoApp']\">TodoApp</a>\n      </li>\n      <li [ngClass]=\"{active: path=='di-tree'}\">\n        <a [routerLink]=\"['./DITree']\">DITree</a>\n      </li>\n      <li [ngClass]=\"{active: path=='angular-directives'}\">\n        <a [routerLink]=\"['./AngularDirectives']\">AngularDirectives</a>\n      </li>\n      <li [ngClass]=\"{active: path=='change-detection'}\">\n        <a [routerLink]=\"['./ChangeDetection']\">ChangeDetection</a>\n      </li>\n      </ul>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{path || 'home' | camelcase }}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_deprecated_1.Router])
	    ], KitchenSink);
	    return KitchenSink;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = KitchenSink;


/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var CamelCasePipe = (function () {
	    function CamelCasePipe() {
	    }
	    CamelCasePipe.prototype.transform = function (value) {
	        return value
	            .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
	            .replace(/\s/g, '')
	            .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
	    };
	    CamelCasePipe = __decorate([
	        core_1.Pipe({ name: 'camelcase' }), 
	        __metadata('design:paramtypes', [])
	    ], CamelCasePipe);
	    return CamelCasePipe;
	}());
	exports.CamelCasePipe = CamelCasePipe;


/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var Home = (function () {
	    function Home() {
	    }
	    Home = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: "\n  <div>\n    <h4>Hello There!!</h4>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Home;


/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_deprecated_1 = __webpack_require__(1);
	var start_child_1 = __webpack_require__(361);
	var start_main_1 = __webpack_require__(362);
	var inner_child_1 = __webpack_require__(363);
	var aux_comp_1 = __webpack_require__(366);
	var router_data1_1 = __webpack_require__(367);
	var router_data2_1 = __webpack_require__(368);
	var Start = (function () {
	    function Start(router) {
	        this.router = router;
	        // injected Router on the component that defines the aux routes
	        this.router.unregisterPrimaryOutlet = function (outlet) {
	            // does not throw
	            this._outlet = null;
	        };
	    }
	    Start = __decorate([
	        router_deprecated_1.RouteConfig([
	            { aux: '/auxcomp', component: aux_comp_1.default, name: 'AuxComp' },
	            { path: '/', component: start_main_1.default, name: 'StartMain' },
	            { path: '/child', component: start_child_1.default, name: 'StartChild' },
	            { path: '/router-data1/:message', component: router_data1_1.default, name: 'RouterData1',
	                data: { passedData: 'Passed in via Data' } },
	            { path: '/router-data2/:name/:message', component: router_data2_1.default,
	                name: 'RouterData2' },
	            { path: '/inner-child/...', component: inner_child_1.default, name: 'InnerChild' },
	        ]),
	        core_1.Component({
	            selector: 'start',
	            directives: [router_deprecated_1.RouterLink, router_deprecated_1.ROUTER_DIRECTIVES],
	            template: "\n  <div>\n    <ul class=\"nav nav-pills\">\n      <li>\n        <a [routerLink]=\"['./StartMain']\">StartMain</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['./StartChild']\">StartChild</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['./RouterData1',\n          {message: 'Message from router'}]\">\n          RouterData1\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['./RouterData2',\n          {message: 'Message from router', name:'Router Name'}]\">\n          RouterData2\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['./InnerChild', 'InnerChildMain']\">InnerChild</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['./', ['AuxComp']]\">Open AuxComp</a>\n      </li>\n    </ul>\n    <hr/>\n    <router-outlet></router-outlet>\n    <router-outlet name=\"auxcomp\"></router-outlet>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_deprecated_1.Router])
	    ], Start);
	    return Start;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Start;


/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var StartChild = (function () {
	    function StartChild() {
	    }
	    StartChild = __decorate([
	        core_1.Component({
	            selector: 'start-child',
	            template: "\n    <div class=\"alert alert-success\">\n      <h4>Router Start child component</h4>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StartChild);
	    return StartChild;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StartChild;


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var StartMain = (function () {
	    function StartMain() {
	    }
	    StartMain = __decorate([
	        core_1.Component({
	            selector: 'start-main',
	            template: "\n    <div class=\"alert alert-warning\">\n      <h4>Router Start main component</h4>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StartMain);
	    return StartMain;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StartMain;


/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_deprecated_1 = __webpack_require__(1);
	var inner_child2_1 = __webpack_require__(364);
	var inner_child_main_1 = __webpack_require__(365);
	var InnerChild = (function () {
	    function InnerChild() {
	    }
	    InnerChild = __decorate([
	        router_deprecated_1.RouteConfig([
	            { path: '/', component: inner_child_main_1.default, name: 'InnerChildMain' },
	            { path: '/child2', component: inner_child2_1.default, name: 'InnerChild2' }
	        ]),
	        core_1.Component({
	            selector: 'inner-child',
	            directives: [router_deprecated_1.RouterLink, router_deprecated_1.ROUTER_DIRECTIVES],
	            template: "\n  <div>\n    <h3>InnerChild Component</h3>\n    <ul class=\"nav nav-pills nav-inverse\">\n      <li><a [routerLink]=\"['./InnerChildMain']\">InnerChildMain</a></li>\n      <li><a [routerLink]=\"['./InnerChild2']\">InnerChild2</a></li>\n    </ul>\n    <hr/>\n    <router-outlet></router-outlet>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InnerChild);
	    return InnerChild;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = InnerChild;


/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var InnerChild2 = (function () {
	    function InnerChild2() {
	    }
	    InnerChild2 = __decorate([
	        core_1.Component({
	            selector: 'inner-child2',
	            template: "\n    <div class=\"alert alert-info\">\n      <h4>Inner child 2</h4>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InnerChild2);
	    return InnerChild2;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = InnerChild2;


/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var InnerChildMain = (function () {
	    function InnerChildMain() {
	    }
	    InnerChildMain = __decorate([
	        core_1.Component({
	            selector: 'inner-child-main',
	            template: "\n    <div class=\"alert alert-success\">\n      <h4>Inner child main</h4>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InnerChildMain);
	    return InnerChildMain;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = InnerChildMain;


/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var AuxComp = (function () {
	    function AuxComp() {
	    }
	    AuxComp = __decorate([
	        core_1.Component({
	            selector: 'aux-comp',
	            template: "\n  <div>\n    <h4>Hello There!!</h4>\n    <h5>I am AuxComp</h5>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AuxComp);
	    return AuxComp;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AuxComp;


/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_deprecated_1 = __webpack_require__(1);
	var RouterData1 = (function () {
	    function RouterData1(routeParams, routeData) {
	        this.routeParams = routeParams;
	        this.routeData = routeData;
	        this.message = this.routeParams.get('message');
	        this.data = this.routeData.get('passedData');
	    }
	    RouterData1 = __decorate([
	        core_1.Component({
	            selector: 'aux-comp',
	            template: "\n  <div>\n    <h3>Hello There!!</h3>\n    <h4>Message: {{message}}</h4>\n    <h4>Data: {{data}}</h4>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.RouteData])
	    ], RouterData1);
	    return RouterData1;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RouterData1;


/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_deprecated_1 = __webpack_require__(1);
	var RouterData2 = (function () {
	    function RouterData2(routeParams) {
	        this.routeParams = routeParams;
	        this.message = this.routeParams.get('message');
	        this.name = this.routeParams.get('name');
	    }
	    RouterData2 = __decorate([
	        core_1.Component({
	            selector: 'aux-comp',
	            template: "\n  <div>\n    <h3>Hello There!!</h3>\n    <h4>Message: {{message}}</h4>\n    <h4>Name: {{name}}</h4>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
	    ], RouterData2);
	    return RouterData2;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RouterData2;


/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var counter_1 = __webpack_require__(370);
	var common_1 = __webpack_require__(4);
	var InputOutput = (function () {
	    function InputOutput() {
	        this.isOn = false;
	        this.isDisabled = false;
	        this.num = 0;
	        this.parentCount = 0;
	    }
	    InputOutput.prototype.onChange = function (val) {
	        this.parentCount = val;
	    };
	    InputOutput.prototype.toggle = function (newState) {
	        if (!this.isDisabled) {
	            this.isOn = newState;
	        }
	    };
	    InputOutput.prototype.displayMessage = function (data) {
	        this.message = data.message;
	        this.name = data.name;
	    };
	    InputOutput = __decorate([
	        core_1.Component({
	            selector: 'input-output',
	            template: "\n    <h4>Parent Num: {{ num }}</h4>\n    <h4>Parent Count: {{ parentCount }}</h4>\n    <counter [count]=\"num\"\n      (result)=\"onChange($event)\"\n      (displayMessage)=\"displayMessage($event)\">\n    </counter>\n\n    <h3 *ngIf=\"name && message\">\n      <hr/>\n      {{name}}: {{message}}\n    </h3>\n\n    <hr/>\n\n    <div class=\"button\" [ngClass]=\"{active: isOn, disabled: isDisabled}\"\n      (click)=\"toggle(!isOn)\">\n        <h4>Click me!</h4>\n    </div>\n  ",
	            styles: ["\n    .button {\n      padding: 5px;\n      width: 120px;\n      border: medium solid black;\n      color: white;\n      background-color: #e08600;\n    }\n    .button h4 {\n      color: #fff;\n    }\n    .active {\n      background-color: #0d87e9;\n      color: white;\n    }\n    .disabled {\n      color: gray;\n      border: medium solid gray;\n    }\n  "],
	            directives: [counter_1.default, common_1.NgClass, common_1.NgIf]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InputOutput);
	    return InputOutput;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = InputOutput;


/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var Counter = (function () {
	    function Counter() {
	        this.count = 0;
	        this.result = new core_1.EventEmitter();
	        this.displayMessage = new core_1.EventEmitter();
	    }
	    Counter.prototype.increment = function () {
	        this.count++;
	        this.result.emit(this.count);
	    };
	    Counter.prototype.sendMessage = function () {
	        var data = { 'name': 'John11', 'message': 'Hello there11!!!' };
	        this.displayMessage.emit(data);
	    };
	    Counter = __decorate([
	        core_1.Component({
	            selector: 'counter',
	            inputs: ['count'],
	            outputs: ['result', 'displayMessage'],
	            template: "\n    <div>\n      <h4>Count: {{ count }}</h4>\n      <button class=\"btn btn-primary\" (click)=\"increment()\">\n        Increment\n      </button>\n      <button class=\"btn btn-warning\" (click)=\"sendMessage()\">\n        SendMessage\n      </button>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Counter);
	    return Counter;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Counter;


/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(4);
	var MyForm = (function () {
	    function MyForm() {
	    }
	    MyForm.prototype.onSubmit = function (regForm) {
	        console.log(regForm.value);
	    };
	    MyForm = __decorate([
	        core_1.Component({
	            selector: 'my-form',
	            template: "\n    <form #regForm=\"ngForm\" (ngSubmit)=\"onSubmit(regForm)\"\n      novalidate class=\"col-sm-8\">\n\n      <div class=\"control-group\">\n        <label for=\"email\">Email:</label>\n        <input class=\"form-control\" type=\"email\"\n         id=\"email\" ngControl=\"email\">\n      </div>\n\n      <div class=\"control-group\">\n        <label for=\"password\">Password:</label>\n        <input class=\"form-control\" type=\"password\"\n         id=\"password\" ngControl=\"password\">\n      </div>\n      <br/>\n      <div class=\"control-group\">\n        <button class=\"btn btn-success\"\n          type=\"submit\">Register</button>\n      </div>\n\n    </form>\n  ",
	            directives: [common_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MyForm);
	    return MyForm;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MyForm;


/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(4);
	var router_deprecated_1 = __webpack_require__(1);
	var Form2 = (function () {
	    function Form2() {
	        this.myform = {};
	    }
	    Form2.prototype.onSubmit = function (myform) {
	        console.log(myform);
	    };
	    Form2 = __decorate([
	        core_1.Component({
	            selector: 'form2',
	            directives: [common_1.FORM_DIRECTIVES, router_deprecated_1.RouterLink, router_deprecated_1.ROUTER_DIRECTIVES],
	            template: "\n  <div>\n    <form (ngSubmit)=\"onSubmit(myform)\" class=\"col-sm-8\">\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" [(ngModel)]=\"myform.description\"\n          required class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Points</label>\n        <input type=\"number\" min=\"1\" max=\"10\" step=\"1\" required\n          [(ngModel)]=\"myform.points\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n      <label>Status</label>\n      <select [(ngModel)]=\"myform.status\" class=\"form-control\" >\n        <option value=\"0\">Pending</option>\n        <option value=\"1\">Started</option>\n        <option value=\"2\">Finished</option>\n        <option value=\"3\">Overdue</option>\n      </select>\n      </div>\n      <div class=\"form-group\">\n      <label>Priority</label>\n      <select [(ngModel)]=\"myform.priority\" class=\"form-control\">\n        <option value=\"0\">Low</option>\n        <option value=\"1\">Medium</option>\n        <option value=\"2\">High</option>\n      </select>\n      </div>\n      <div class=\"form-group\">\n      <label>Date</label>\n      <input type=\"date\" [(ngModel)]=\"myform.targetDate\" class=\"form-control\" />\n      </div>\n      <input type=\"submit\" value=\"Save\" class=\"btn btn-success\" />\n    </form>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Form2);
	    return Form2;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Form2;


/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var load_as_root_component_1 = __webpack_require__(374);
	var load_next_to_component_1 = __webpack_require__(377);
	var DynamicControls = (function () {
	    function DynamicControls() {
	    }
	    DynamicControls = __decorate([
	        core_1.Component({
	            selector: 'dynamic-controls',
	            template: "\n    <div>\n      <load-next-to-component></load-next-to-component>\n      <hr/>\n      <load-as-root-component></load-as-root-component>\n    </div>\n  ",
	            directives: [load_as_root_component_1.default, load_next_to_component_1.default]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DynamicControls);
	    return DynamicControls;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DynamicControls;


/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var dynamic_component_1 = __webpack_require__(375);
	var hello_1 = __webpack_require__(376);
	var LoadAsRootComponent = (function () {
	    function LoadAsRootComponent(dcl, elementRef, injector) {
	        this.dcl = dcl;
	        this.elementRef = elementRef;
	        this.injector = injector;
	    }
	    LoadAsRootComponent.prototype.loadComponent = function () {
	        this.dcl.loadAsRoot(dynamic_component_1.default, '#anchor', this.injector)
	            .then(function (componentRef) { return console.log('loadAsRoot', componentRef); });
	    };
	    LoadAsRootComponent = __decorate([
	        core_1.Component({
	            selector: 'load-as-root-component',
	            directives: [
	                hello_1.default
	            ],
	            template: "\n    <div class=\"wrapper\">\n      <h3>LoadAsRoot Component</h3>\n      <button class=\"btn btn-warning\" (click)=\"loadComponent()\">\n        Load Component\n      </button>\n      <div id=\"anchor\"></div>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef, core_1.Injector])
	    ], LoadAsRootComponent);
	    return LoadAsRootComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LoadAsRootComponent;


/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var hello_1 = __webpack_require__(376);
	var DynamicComponent = (function () {
	    function DynamicComponent() {
	    }
	    DynamicComponent = __decorate([
	        core_1.Component({
	            selector: 'dynamic-component',
	            directives: [
	                hello_1.default
	            ],
	            template: "\n    <div class=\"wrapper\">\n      <h4>Dynamically loaded component</h4>\n      <hello></hello>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DynamicComponent);
	    return DynamicComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DynamicComponent;


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var Hello = (function () {
	    function Hello() {
	    }
	    Hello = __decorate([
	        core_1.Component({
	            selector: 'hello',
	            template: "\n    <h5>\n      <span class=\"label label-primary\">Hello There</span>\n    </h5>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Hello);
	    return Hello;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Hello;


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var dynamic_component_1 = __webpack_require__(375);
	var hello_1 = __webpack_require__(376);
	var LoadNextToComponent = (function () {
	    function LoadNextToComponent(dcl, viewContainerRef) {
	        this.dcl = dcl;
	        this.viewContainerRef = viewContainerRef;
	    }
	    LoadNextToComponent.prototype.loadComponent = function () {
	        this.dcl.loadNextToLocation(dynamic_component_1.default, this.viewContainerRef)
	            .then(function (componentRef) { return console.log('loadNextToLocation', componentRef); });
	    };
	    LoadNextToComponent = __decorate([
	        core_1.Component({
	            selector: 'load-next-to-component',
	            directives: [
	                hello_1.default
	            ],
	            template: "\n    <h3>LoadNextToLocation Component</h3>\n    <button class=\"btn btn-success\" (click)=\"loadComponent()\">\n      Load Component\n    </button>\n  "
	        }), 
	        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ViewContainerRef])
	    ], LoadNextToComponent);
	    return LoadNextToComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LoadNextToComponent;


/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(4);
	var ControlForm = (function () {
	    function ControlForm(fb) {
	        this.formControl = fb.group({
	            'name': ['John Doe'],
	            'email': 'johndoe@gmail.com'
	        });
	    }
	    ControlForm.prototype.onSubmit = function (value) {
	        console.log('you submitted value: ', value);
	    };
	    ControlForm = __decorate([
	        core_1.Component({
	            selector: 'control-form',
	            directives: [common_1.FORM_DIRECTIVES],
	            template: "\n    <div>\n        <form [ngFormModel]=\"formControl\"\n           (ngSubmit)=\"onSubmit(formControl.value)\"\n           class=\"col-sm-8\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" id=\"name\" placeholder=\"Name\"\n                  class=\"form-control\"\n                  [ngFormControl]=\"formControl.controls['name']\">\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" id=\"email\" placeholder=\"Email\"\n                  class=\"form-control\"\n                  [ngFormControl]=\"formControl.controls['email']\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </form>\n    </div>\n"
	        }), 
	        __metadata('design:paramtypes', [common_1.FormBuilder])
	    ], ControlForm);
	    return ControlForm;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ControlForm;


/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var todo_input_1 = __webpack_require__(380);
	var todo_list_1 = __webpack_require__(382);
	var TodoApp = (function () {
	    function TodoApp() {
	    }
	    TodoApp = __decorate([
	        core_1.Component({
	            selector: 'todo-app',
	            directives: [todo_input_1.TodoInput, todo_list_1.TodoList],
	            template: "\n  <div>\n    <todo-input></todo-input>\n    <hr/>\n    <todo-list></todo-list>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TodoApp);
	    return TodoApp;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoApp;


/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(4);
	var todo_service_1 = __webpack_require__(381);
	var TodoInput = (function () {
	    function TodoInput(todoService, formatService) {
	        this.todoService = todoService;
	        this.formatService = formatService;
	        this.todoModel = new todo_service_1.TodoModel();
	    }
	    TodoInput.prototype.onSubmit = function () {
	        this.todoService.addTodo(this.todoModel);
	        this.todoModel = new todo_service_1.TodoModel();
	    };
	    TodoInput.prototype.onClick = function (logMessage) {
	        var tm = new todo_service_1.TodoModel();
	        tm.title = logMessage.value;
	        this.todoService.addTodo(tm);
	        logMessage.value = '';
	    };
	    TodoInput = __decorate([
	        core_1.Component({
	            selector: 'todo-input',
	            directives: [common_1.FORM_DIRECTIVES],
	            template: "\n  <div>\n    <h4>Without Model</h4>\n    <form (ngSubmit)=\"onClick(todo)\" class=\"form-inline\">\n      <input type=\"text\" #todo required class=\"form-control\" />\n      <button class=\"btn btn-success\">Add Todo</button>\n    </form>\n    <hr/>\n    <h4>With Model</h4>\n    <form (ngSubmit)=\"onSubmit()\"  class=\"form-inline\">\n      <input type=\"text\" [(ngModel)]=\"todoModel.title\"\n       required class=\"form-control\"  />\n      <button class=\"btn btn-success\">Add Todo</button>\n    </form>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [todo_service_1.TodoService, todo_service_1.FormatService])
	    ], TodoInput);
	    return TodoInput;
	}());
	exports.TodoInput = TodoInput;


/***/ },

/***/ 381:
/***/ function(module, exports) {

	"use strict";
	var TodoModel = (function () {
	    function TodoModel(title) {
	        if (title === void 0) { title = ''; }
	        this.title = title;
	        this.status = 'started';
	    }
	    TodoModel.prototype.toggle = function () {
	        if (this.status === 'started') {
	            this.status = 'completed';
	        }
	        else {
	            this.status = 'started';
	        }
	    };
	    return TodoModel;
	}());
	exports.TodoModel = TodoModel;
	var TodoService = (function () {
	    function TodoService() {
	        this.todos = [
	            new TodoModel('one'),
	            new TodoModel('two'),
	            new TodoModel('three')
	        ];
	    }
	    TodoService.prototype.addTodo = function (value) {
	        this.todos.push(value);
	    };
	    return TodoService;
	}());
	exports.TodoService = TodoService;
	var FormatService = (function () {
	    function FormatService() {
	    }
	    FormatService.prototype.sayHello = function () {
	        console.log('hello');
	    };
	    return FormatService;
	}());
	exports.FormatService = FormatService;


/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(4);
	var todo_service_1 = __webpack_require__(381);
	var TodoList = (function () {
	    function TodoList(todoService) {
	        this.todoService = todoService;
	    }
	    TodoList = __decorate([
	        core_1.Component({
	            selector: 'todo-list',
	            directives: [common_1.NgFor],
	            template: "\n  <table class=\"table table-bordered\">\n    <tr>\n      <th>Title</th>\n      <th>Status</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let todo of todoService.todos\">\n      <td>{{todo.title}}</td>\n      <td>\n        <h4 [ngSwitch]=\"todo.status\">\n            <p class=\"label label-success\"\n             *ngSwitchCase=\"'started'\">Started</p>\n            <p class=\"label label-primary\"\n             *ngSwitchCase=\"'completed'\">Completed</p>\n        </h4>\n      </td>\n      <td><button\n         class=\"btn btn-warning\"\n        (click)=\"todo.toggle()\">Toggle</button></td>\n    </tr>\n  </table>\n  "
	        }), 
	        __metadata('design:paramtypes', [todo_service_1.TodoService])
	    ], TodoList);
	    return TodoList;
	}());
	exports.TodoList = TodoList;


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var component1_1 = __webpack_require__(384);
	var component2_1 = __webpack_require__(390);
	var service1_1 = __webpack_require__(386);
	var DITree = (function () {
	    function DITree(s1) {
	        this.s1 = s1;
	        this.service1Value = s1.value;
	    }
	    DITree = __decorate([
	        core_1.Component({
	            selector: 'di-tree',
	            directives: [component1_1.default, component2_1.default],
	            providers: [service1_1.default],
	            template: "\n  <div>\n    <p>di-app init: service1</p>\n    {{service1Value}}\n    <hr/>\n    <component1></component1>\n    <component2></component2>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [service1_1.default])
	    ], DITree);
	    return DITree;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DITree;


/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var component3_1 = __webpack_require__(385);
	var component4_1 = __webpack_require__(388);
	var service3_1 = __webpack_require__(387);
	var Component1 = (function () {
	    function Component1(s3) {
	        this.s3 = s3;
	        this.service3Value = s3.value;
	    }
	    Component1 = __decorate([
	        core_1.Component({
	            selector: 'component1',
	            providers: [service3_1.default],
	            directives: [component3_1.default, component4_1.default],
	            template: "\n    <p>component1 init: service3</p>\n    {{service3Value}}\n    <hr/>\n    <component3></component3>\n    <component4></component4>\n  "
	        }), 
	        __metadata('design:paramtypes', [service3_1.default])
	    ], Component1);
	    return Component1;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Component1;


/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var service1_1 = __webpack_require__(386);
	var service3_1 = __webpack_require__(387);
	var Component3 = (function () {
	    function Component3(s1, s3) {
	        this.s1 = s1;
	        this.s3 = s3;
	        this.service1Value = s1.value;
	        this.service3Value = s3.value;
	    }
	    Component3 = __decorate([
	        core_1.Component({
	            selector: 'component3',
	            template: "\n    <p>component3</p>\n    {{service1Value}}\n    {{service3Value}}\n    <hr/>\n  "
	        }), 
	        __metadata('design:paramtypes', [service1_1.default, service3_1.default])
	    ], Component3);
	    return Component3;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Component3;


/***/ },

/***/ 386:
/***/ function(module, exports) {

	"use strict";
	var Service1 = (function () {
	    function Service1() {
	        this.value = 'service1';
	        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
	    }
	    return Service1;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Service1;


/***/ },

/***/ 387:
/***/ function(module, exports) {

	"use strict";
	var Service3 = (function () {
	    function Service3() {
	        this.value = 'service3';
	        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
	    }
	    return Service3;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Service3;


/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var service1_1 = __webpack_require__(386);
	var service4_1 = __webpack_require__(389);
	var Component4 = (function () {
	    function Component4(s1, s4) {
	        this.s1 = s1;
	        this.s4 = s4;
	        this.service1Value = s1.value;
	        this.service4Value = s4.value;
	    }
	    Component4 = __decorate([
	        core_1.Component({
	            selector: 'component4',
	            providers: [service4_1.default],
	            template: "\n    <p>component4 init: service4</p>\n    {{service1Value}}\n    {{service4Value}}\n    <hr/>\n  "
	        }), 
	        __metadata('design:paramtypes', [service1_1.default, service4_1.default])
	    ], Component4);
	    return Component4;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Component4;


/***/ },

/***/ 389:
/***/ function(module, exports) {

	"use strict";
	var Service4 = (function () {
	    function Service4() {
	        this.value = 'service4';
	        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
	    }
	    return Service4;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Service4;


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var component5_1 = __webpack_require__(391);
	var component6_1 = __webpack_require__(392);
	var service2_1 = __webpack_require__(393);
	var Component2 = (function () {
	    function Component2(s2) {
	        this.s2 = s2;
	        this.service2Value = s2.value;
	    }
	    Component2 = __decorate([
	        core_1.Component({
	            selector: 'component2',
	            directives: [component5_1.default, component6_1.default],
	            providers: [service2_1.default],
	            template: "\n    <p>component2 init service2</p>\n    {{service2Value}}\n    <hr/>\n    <component5></component5>\n    <component6></component6>\n  "
	        }), 
	        __metadata('design:paramtypes', [service2_1.default])
	    ], Component2);
	    return Component2;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Component2;


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var service3_1 = __webpack_require__(387);
	var service4_1 = __webpack_require__(389);
	var Component5 = (function () {
	    function Component5(s3, s4) {
	        this.s3 = s3;
	        this.s4 = s4;
	        this.service3Value = s3.value;
	        this.service4Value = s4.value;
	    }
	    Component5 = __decorate([
	        core_1.Component({
	            selector: 'component5',
	            providers: [service3_1.default, service4_1.default],
	            template: "\n    <p>component5 init: service3, service4</p>\n    {{service3Value}}\n    {{service4Value}}\n  "
	        }), 
	        __metadata('design:paramtypes', [service3_1.default, service4_1.default])
	    ], Component5);
	    return Component5;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Component5;


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var service1_1 = __webpack_require__(386);
	var service2_1 = __webpack_require__(393);
	var todo_service_1 = __webpack_require__(381);
	var Component6 = (function () {
	    function Component6(s1, s2, fs) {
	        this.s1 = s1;
	        this.s2 = s2;
	        this.fs = fs;
	        this.service1Value = s1.value;
	        this.service2Value = s2.value;
	    }
	    Component6 = __decorate([
	        core_1.Component({
	            selector: 'component6',
	            template: "\n    <p>component6</p>\n    {{service1Value}}\n    {{service2Value}}\n    <hr/>\n  "
	        }), 
	        __metadata('design:paramtypes', [service1_1.default, service2_1.default, todo_service_1.FormatService])
	    ], Component6);
	    return Component6;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Component6;


/***/ },

/***/ 393:
/***/ function(module, exports) {

	"use strict";
	var Service2 = (function () {
	    function Service2() {
	        this.value = 'service2';
	        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
	    }
	    return Service2;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Service2;


/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var user_1 = __webpack_require__(395);
	var user_info_default_1 = __webpack_require__(396);
	var user_info_push_1 = __webpack_require__(397);
	var user_info_checkonce_1 = __webpack_require__(398);
	var ChangeDetection = (function () {
	    function ChangeDetection() {
	        this.user = new user_1.User(1, 'John Doe', 'john@doe.com');
	    }
	    ChangeDetection.prototype.reset = function () {
	        this.user = new user_1.User(1, 'John Doe', 'john@doe.com');
	    };
	    ChangeDetection.prototype.makeUserOnline = function (type) {
	        if (type === 0) {
	            this.user.isOnline = true;
	        }
	        else if (type === 1) {
	            this.user = Object.assign({}, this.user, { isOnline: true });
	        }
	    };
	    ChangeDetection = __decorate([
	        core_1.Component({
	            selector: 'change-detection',
	            directives: [user_info_default_1.UserInfoDefault, user_info_push_1.UserInfoPush, user_info_checkonce_1.UserInfoCheckOnce],
	            template: "\n  <div>\n    <button type=\"button\" class=\"btn btn-danger\"\n      (click)=\"reset()\">\n      Reset\n    </button>\n\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"makeUserOnline(0)\">\n      Make User Online (muttable)\n    </button>\n\n    <button type=\"button\" class=\"btn btn-success\"\n      (click)=\"makeUserOnline(1)\">\n      Make User Online (imuttable)\n    </button>\n\n    <user-info-default [user]=\"user\">\n    </user-info-default>\n\n    <user-info-push [user]=\"user\">\n    </user-info-push>\n\n    <user-info-checkonce [user]=\"user\">\n    </user-info-checkonce>\n\n\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ChangeDetection);
	    return ChangeDetection;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ChangeDetection;


/***/ },

/***/ 395:
/***/ function(module, exports) {

	"use strict";
	var User = (function () {
	    function User(id, name, email, isOnline) {
	        if (isOnline === void 0) { isOnline = false; }
	        this.id = id;
	        this.name = name;
	        this.email = email;
	        this.isOnline = isOnline;
	    }
	    return User;
	}());
	exports.User = User;


/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var user_1 = __webpack_require__(395);
	var UserInfoDefault = (function () {
	    function UserInfoDefault() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', user_1.User)
	    ], UserInfoDefault.prototype, "user", void 0);
	    UserInfoDefault = __decorate([
	        core_1.Component({
	            selector: 'user-info-default',
	            changeDetection: core_1.ChangeDetectionStrategy.Default,
	            styles: ["\n    .bg {\n      background-color: red;\n    }\n  "],
	            template: "\n    <div [ngClass]=\"{'bg' : user.isOnline}\">\n      <h4>User Info Default</h4>\n      <p>\n        <label>User Id: {{user.id}} {{user.isOnline}}</label>\n      </p>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserInfoDefault);
	    return UserInfoDefault;
	}());
	exports.UserInfoDefault = UserInfoDefault;


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var user_1 = __webpack_require__(395);
	var UserInfoPush = (function () {
	    function UserInfoPush() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', user_1.User)
	    ], UserInfoPush.prototype, "user", void 0);
	    UserInfoPush = __decorate([
	        core_1.Component({
	            selector: 'user-info-push',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            styles: ["\n    .bg {\n      background-color: red;\n    }\n  "],
	            template: "\n    <div [ngClass]=\"{'bg' : user.isOnline}\">\n      <h4>User Info OnPush</h4>\n      <p>\n        <label>User Id: {{user.id}} {{user.isOnline}}</label>\n      </p>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserInfoPush);
	    return UserInfoPush;
	}());
	exports.UserInfoPush = UserInfoPush;


/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var user_1 = __webpack_require__(395);
	var UserInfoCheckOnce = (function () {
	    function UserInfoCheckOnce() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', user_1.User)
	    ], UserInfoCheckOnce.prototype, "user", void 0);
	    UserInfoCheckOnce = __decorate([
	        core_1.Component({
	            selector: 'user-info-checkonce',
	            changeDetection: core_1.ChangeDetectionStrategy.CheckOnce,
	            styles: ["\n    .bg {\n      background-color: red;\n    }\n  "],
	            template: "\n    <div [ngClass]=\"{'bg' : user.isOnline}\">\n      <h4>User Info CheckOnce</h4>\n      <p>\n        <label>User Id: {{user.id}} {{user.isOnline}}</label>\n      </p>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserInfoCheckOnce);
	    return UserInfoCheckOnce;
	}());
	exports.UserInfoCheckOnce = UserInfoCheckOnce;


/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var ngif_directive_1 = __webpack_require__(400);
	var ngfor_directive_1 = __webpack_require__(402);
	var ngswitch_directive_1 = __webpack_require__(403);
	var ngclass_directive_1 = __webpack_require__(404);
	var ngstyle_directive_1 = __webpack_require__(405);
	var nglocalization_directive_1 = __webpack_require__(406);
	var AngularDirectives = (function () {
	    function AngularDirectives() {
	    }
	    AngularDirectives = __decorate([
	        core_1.Component({
	            selector: 'angular-directives',
	            directives: [ngif_directive_1.default, ngfor_directive_1.default,
	                ngswitch_directive_1.default, ngclass_directive_1.default, ngstyle_directive_1.default,
	                nglocalization_directive_1.default],
	            template: "\n  <div>\n    <ngif-directive></ngif-directive>\n    <hr/>\n    <ngfor-directive></ngfor-directive>\n    <hr/>\n    <ngswitch-directive></ngswitch-directive>\n    <hr/>\n    <ngclass-directive></ngclass-directive>\n    <hr/>\n    <ngstyle-directive></ngstyle-directive>\n    <hr/>\n    <nglocalization-directive></nglocalization-directive>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AngularDirectives);
	    return AngularDirectives;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AngularDirectives;


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var hello_1 = __webpack_require__(401);
	var NgIfDirective = (function () {
	    function NgIfDirective() {
	        this.sayHello = false;
	    }
	    NgIfDirective.prototype.toggle = function () {
	        this.sayHello = !this.sayHello;
	    };
	    NgIfDirective = __decorate([
	        core_1.Component({
	            selector: 'ngif-directive',
	            directives: [hello_1.default],
	            template: "\n  <div>\n    <hello [msg]='\"Hello from John!!\"' *ngIf=\"sayHello\"></hello>\n    <hello [msg]='\"Hi from John!!\"' *ngIf=\"!sayHello\"></hello>\n\n    <button class=\"btn btn-primary\"\n       (click)=\"toggle()\">\n      {{sayHello ? 'Say Hi': 'Say Hello'}}\n    </button>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgIfDirective);
	    return NgIfDirective;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NgIfDirective;


/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var Hello = (function () {
	    function Hello() {
	    }
	    Hello = __decorate([
	        core_1.Component({
	            selector: 'hello',
	            inputs: ['msg'],
	            template: "\n  <h4>\n    Message: {{msg}}\n  </h4>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Hello);
	    return Hello;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Hello;


/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var hello_1 = __webpack_require__(401);
	var NgForDirective = (function () {
	    function NgForDirective() {
	        this.names = [
	            'John',
	            'Sam',
	            'Mike',
	            'Sumit',
	            'Igor'
	        ];
	    }
	    NgForDirective = __decorate([
	        core_1.Component({
	            selector: 'ngfor-directive',
	            directives: [hello_1.default],
	            template: "\n  <div>\n     <hello *ngFor=\"let name of names\" [msg]=\"'Hello from ' + name\"></hello>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgForDirective);
	    return NgForDirective;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NgForDirective;


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var hello_1 = __webpack_require__(401);
	var NgSwitchDirective = (function () {
	    function NgSwitchDirective() {
	        this.color = 'red';
	        this.colors = [
	            'red',
	            'green',
	            'yellow',
	            'blue',
	            'grey',
	            'aaa',
	            'bbb'
	        ];
	    }
	    NgSwitchDirective.prototype.switch = function () {
	        var random = parseInt(Math.random() * 6 + '', 10);
	        this.color = this.colors[random];
	    };
	    NgSwitchDirective = __decorate([
	        core_1.Component({
	            selector: 'ngswitch-directive',
	            directives: [hello_1.default],
	            template: "\n  <div>\n     <div class=\"container\" [ngSwitch]=\"color\">\n        <hello *ngSwitchCase=\"'red'\" [msg]=\"'Color is Red'\"></hello>\n        <hello *ngSwitchCase=\"'green'\" [msg]=\"'Color is Green'\"></hello>\n        <hello *ngSwitchCase=\"'yellow'\" [msg]=\"'Color is Yellow'\"></hello>\n        <hello *ngSwitchCase=\"'blue'\" [msg]=\"'Color is Blue'\"></hello>\n        <hello *ngSwitchCase=\"'grey'\" [msg]=\"'Color is Grey'\"></hello>\n        <hello *ngSwitchDefault [msg]=\"'No Color Selected'\"></hello>\n     </div>\n     <button class=\"btn btn-success\" (click)=\"switch()\">Switch Color</button>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgSwitchDirective);
	    return NgSwitchDirective;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NgSwitchDirective;


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var NgClassDirective = (function () {
	    function NgClassDirective() {
	        this.isOn = false;
	        this.isDisabled = false;
	    }
	    NgClassDirective.prototype.toggle = function (newState) {
	        if (!this.isDisabled) {
	            this.isOn = newState;
	        }
	    };
	    NgClassDirective = __decorate([
	        core_1.Component({
	            selector: 'ngclass-directive',
	            inputs: ['isDisabled'],
	            template: "\n     <div class=\"button\"\n       [ngClass]=\"{active: isOn, disabled: isDisabled}\"\n         (click)=\"toggle(!isOn)\">\n         <h4>Click me!</h4>\n     </div>",
	            styles: ["\n    .button {\n      padding: 10px;\n      border: medium solid black;\n    }\n\n    .active {\n      background-color: red;\n    }\n\n    .disabled {\n      color: gray;\n      border: medium solid gray;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgClassDirective);
	    return NgClassDirective;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NgClassDirective;


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var NgStyleDirective = (function () {
	    function NgStyleDirective() {
	        this.style = 'normal';
	        this.weight = 'normal';
	        this.size = '20px';
	    }
	    NgStyleDirective.prototype.changeStyle = function ($event) {
	        this.style = $event.target.checked ? 'italic' : 'normal';
	    };
	    NgStyleDirective.prototype.changeWeight = function ($event) {
	        this.weight = $event.target.checked ? 'bold' : 'normal';
	    };
	    NgStyleDirective = __decorate([
	        core_1.Component({
	            selector: 'ngstyle-directive',
	            template: "\n   <h1 [ngStyle]=\"{'font-style': style,\n    'font-size': size, 'font-weight': weight}\">\n     Change style of this text!\n   </h1>\n\n   <hr>\n   <label>Italic: <input type=\"checkbox\" (change)=\"changeStyle($event)\"></label>\n   <label>Bold: <input type=\"checkbox\" (change)=\"changeWeight($event)\"></label>\n   <label>Size: <input type=\"text\" [value]=\"size\"\n   (change)=\"size = $event.target.value\"></label>\n "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgStyleDirective);
	    return NgStyleDirective;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NgStyleDirective;


/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(4);
	var MyLocalization = (function (_super) {
	    __extends(MyLocalization, _super);
	    function MyLocalization() {
	        _super.apply(this, arguments);
	    }
	    MyLocalization.prototype.getPluralCategory = function (value) {
	        if (value < 5) {
	            return 'few';
	        }
	    };
	    return MyLocalization;
	}(common_1.NgLocalization));
	var NgLocalizationDirective = (function () {
	    function NgLocalizationDirective() {
	        this.value = 'init';
	    }
	    NgLocalizationDirective.prototype.inc = function () {
	        this.value = this.value === 'init' ? 0 : this.value + 1;
	    };
	    NgLocalizationDirective = __decorate([
	        core_1.Component({
	            selector: 'nglocalization-directive',
	            providers: [core_1.provide(common_1.NgLocalization, { useClass: MyLocalization })],
	            template: "\n    <h4>Value = {{value}}</h4>\n    <button class=\"btn btn-warning\" (click)=\"inc()\">Increment</button>\n    <h4 [ngPlural]=\"value\">\n      <template ngPluralCase=\"=0\">there is nothing</template>\n      <template ngPluralCase=\"=1\">there is one</template>\n      <template ngPluralCase=\"few\">there are a few</template>\n      <template ngPluralCase=\"other\">there is some number</template>\n    </h4>\n  ",
	            directives: [common_1.NgPlural, common_1.NgPluralCase]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgLocalizationDirective);
	    return NgLocalizationDirective;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NgLocalizationDirective;


/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var demo_component_1 = __webpack_require__(408);
	var service1_1 = __webpack_require__(386);
	var service2_1 = __webpack_require__(393);
	var Demo = (function () {
	    function Demo() {
	    }
	    Demo.prototype.doStuff = function ($event) {
	        console.log($event);
	    };
	    Demo = __decorate([
	        core_1.Component({
	            selector: 'demo',
	            directives: [demo_component_1.default],
	            providers: [service1_1.default, service2_1.default],
	            template: "\n  <div>\n    <demo-comp\n      [msg]='\"input data\"'\n      (newMsg)='doStuff($event)'>\n    </demo-comp>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Demo);
	    return Demo;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Demo;


/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var service1_1 = __webpack_require__(386);
	var service2_1 = __webpack_require__(393);
	var todo_service_1 = __webpack_require__(381);
	var di_tree_1 = __webpack_require__(383);
	var DemoComponent = (function () {
	    function DemoComponent(s1, s2, fs, di) {
	        this.s1 = s1;
	        this.s2 = s2;
	        this.fs = fs;
	        this.di = di;
	        this.size = '50px';
	        this.bgcolor = 'white';
	        this.padding = '10px';
	        this.textcolor = 'slategrey';
	        this.newMsg = new core_1.EventEmitter();
	    }
	    DemoComponent.prototype.changeMsg = function ($event) {
	        this.msg = $event.target.value;
	        this.newMsg.emit(this.msg);
	    };
	    DemoComponent = __decorate([
	        core_1.Component({
	            selector: 'demo-comp',
	            template: "\n  <h1 [ngStyle]=\"{\n    'padding': padding,\n    'color': textcolor,\n    'font-size': size,\n    'background-color': bgcolor\n  }\">\n     {{msg}}\n   </h1>\n   <label>Message: <input type=\"text\" [value]=\"msg\"\n   (change)=\"changeMsg($event)\"></label>\n ",
	            providers: [di_tree_1.default],
	            inputs: ['msg'],
	            outputs: ['newMsg']
	        }), 
	        __metadata('design:paramtypes', [service1_1.default, service2_1.default, todo_service_1.FormatService, di_tree_1.default])
	    ], DemoComponent);
	    return DemoComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DemoComponent;


/***/ }

});
//# sourceMappingURL=app.1f6fc1b2d5ca890c76bb.bundle.js.map