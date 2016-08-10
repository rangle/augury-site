webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
	var platform_browser_dynamic_1 = __webpack_require__(176);
	var app_routes_1 = __webpack_require__(329);
	var kitchen_sink_1 = __webpack_require__(436);
	var todo_service_1 = __webpack_require__(397);
	platform_browser_dynamic_1.bootstrap(kitchen_sink_1.default, [
	    app_routes_1.APP_ROUTER_PROVIDERS,
	    { provide: common_1.APP_BASE_HREF, useValue: '/' },
	    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
	    common_1.FORM_DIRECTIVES,
	    todo_service_1.TodoService,
	    todo_service_1.FormatService
	]).catch(function (err) { return console.error(err); });


/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(330);
	var kitchen_sink_routes_1 = __webpack_require__(383);
	var router_routes_1 = __webpack_require__(426);
	exports.routes = kitchen_sink_routes_1.KitchenSinkRoutes.concat(router_routes_1.RouterRoutes);
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var home_1 = __webpack_require__(384);
	var input_output_1 = __webpack_require__(385);
	var my_form_1 = __webpack_require__(387);
	var form2_1 = __webpack_require__(388);
	var dynamic_controls_1 = __webpack_require__(389);
	var control_form_1 = __webpack_require__(394);
	var todo_app_1 = __webpack_require__(395);
	var di_tree_1 = __webpack_require__(399);
	var change_detection_1 = __webpack_require__(410);
	var angular_directives_1 = __webpack_require__(414);
	var demo_1 = __webpack_require__(422);
	var stress_tester_1 = __webpack_require__(424);
	var metadata_test_1 = __webpack_require__(425);
	exports.KitchenSinkRoutes = [
	    { path: '', component: home_1.default },
	    { path: 'input-output', component: input_output_1.default },
	    { path: 'my-form', component: my_form_1.default },
	    { path: 'form2', component: form2_1.default },
	    { path: 'control-form', component: control_form_1.default },
	    { path: 'dynamic-controls', component: dynamic_controls_1.default },
	    { path: 'todo-app', component: todo_app_1.default },
	    { path: 'di-tree', component: di_tree_1.default },
	    { path: 'angular-directives', component: angular_directives_1.default },
	    { path: 'change-detection', component: change_detection_1.default },
	    { path: 'demo', component: demo_1.default },
	    { path: 'stress-tester', component: stress_tester_1.default },
	    { path: 'metadata-test', component: metadata_test_1.default },
	];


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
	var core_1 = __webpack_require__(1);
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
	var core_1 = __webpack_require__(1);
	var counter_1 = __webpack_require__(386);
	var common_1 = __webpack_require__(112);
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

/***/ 386:
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
	var core_1 = __webpack_require__(1);
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
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], Counter.prototype, "count", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], Counter.prototype, "result", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], Counter.prototype, "displayMessage", void 0);
	    Counter = __decorate([
	        core_1.Component({
	            selector: 'counter',
	            template: "\n    <div>\n      <h4>Count: {{ count }}</h4>\n      <button class=\"btn btn-primary\" (click)=\"increment()\">\n        Increment\n      </button>\n      <button class=\"btn btn-warning\" (click)=\"sendMessage()\">\n        SendMessage\n      </button>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Counter);
	    return Counter;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Counter;


/***/ },

/***/ 387:
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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
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
	            directives: [common_1.FORM_DIRECTIVES],
	            template: "\n  <div>\n    <form (ngSubmit)=\"onSubmit(myform)\" class=\"col-sm-8\">\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" [(ngModel)]=\"myform.description\"\n          required class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Points</label>\n        <input type=\"number\" min=\"1\" max=\"10\" step=\"1\" required\n          [(ngModel)]=\"myform.points\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n      <label>Status</label>\n      <select [(ngModel)]=\"myform.status\" class=\"form-control\" >\n        <option value=\"0\">Pending</option>\n        <option value=\"1\">Started</option>\n        <option value=\"2\">Finished</option>\n        <option value=\"3\">Overdue</option>\n      </select>\n      </div>\n      <div class=\"form-group\">\n      <label>Priority</label>\n      <select [(ngModel)]=\"myform.priority\" class=\"form-control\">\n        <option value=\"0\">Low</option>\n        <option value=\"1\">Medium</option>\n        <option value=\"2\">High</option>\n      </select>\n      </div>\n      <div class=\"form-group\">\n      <label>Date</label>\n      <input type=\"date\" [(ngModel)]=\"myform.targetDate\" class=\"form-control\" />\n      </div>\n      <input type=\"submit\" value=\"Save\" class=\"btn btn-success\" />\n    </form>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Form2);
	    return Form2;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Form2;


/***/ },

/***/ 389:
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
	var core_1 = __webpack_require__(1);
	var load_as_root_component_1 = __webpack_require__(390);
	var load_next_to_component_1 = __webpack_require__(393);
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
	var core_1 = __webpack_require__(1);
	var dynamic_component_1 = __webpack_require__(391);
	var hello_1 = __webpack_require__(392);
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
	var core_1 = __webpack_require__(1);
	var hello_1 = __webpack_require__(392);
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
	var core_1 = __webpack_require__(1);
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

/***/ 393:
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
	var core_1 = __webpack_require__(1);
	var dynamic_component_1 = __webpack_require__(391);
	var hello_1 = __webpack_require__(392);
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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
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

/***/ 395:
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
	var core_1 = __webpack_require__(1);
	var todo_input_1 = __webpack_require__(396);
	var todo_list_1 = __webpack_require__(398);
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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
	var todo_service_1 = __webpack_require__(397);
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

/***/ 397:
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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
	var todo_service_1 = __webpack_require__(397);
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
	var core_1 = __webpack_require__(1);
	var component1_1 = __webpack_require__(400);
	var component2_1 = __webpack_require__(406);
	var service1_1 = __webpack_require__(402);
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
	var core_1 = __webpack_require__(1);
	var component3_1 = __webpack_require__(401);
	var component4_1 = __webpack_require__(404);
	var service3_1 = __webpack_require__(403);
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
	var core_1 = __webpack_require__(1);
	var service1_1 = __webpack_require__(402);
	var service3_1 = __webpack_require__(403);
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

/***/ 402:
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

/***/ 403:
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
	var core_1 = __webpack_require__(1);
	var service1_1 = __webpack_require__(402);
	var service4_1 = __webpack_require__(405);
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

/***/ 405:
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

/***/ 406:
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
	var core_1 = __webpack_require__(1);
	var component5_1 = __webpack_require__(407);
	var component6_1 = __webpack_require__(408);
	var service2_1 = __webpack_require__(409);
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
	var core_1 = __webpack_require__(1);
	var service3_1 = __webpack_require__(403);
	var service4_1 = __webpack_require__(405);
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
	var core_1 = __webpack_require__(1);
	var service1_1 = __webpack_require__(402);
	var service2_1 = __webpack_require__(409);
	var todo_service_1 = __webpack_require__(397);
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

/***/ 409:
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

/***/ 410:
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
	var core_1 = __webpack_require__(1);
	var user_1 = __webpack_require__(411);
	var user_info_default_1 = __webpack_require__(412);
	var user_info_push_1 = __webpack_require__(413);
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
	            directives: [user_info_default_1.UserInfoDefault, user_info_push_1.UserInfoPush],
	            template: "\n  <div>\n    <button type=\"button\" class=\"btn btn-danger\"\n      (click)=\"reset()\">\n      Reset\n    </button>\n\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"makeUserOnline(0)\">\n      Make User Online (muttable)\n    </button>\n\n    <button type=\"button\" class=\"btn btn-success\"\n      (click)=\"makeUserOnline(1)\">\n      Make User Online (imuttable)\n    </button>\n\n    <user-info-default [user]=\"user\">\n    </user-info-default>\n\n    <user-info-push [user]=\"user\">\n    </user-info-push>\n\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ChangeDetection);
	    return ChangeDetection;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ChangeDetection;


/***/ },

/***/ 411:
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

/***/ 412:
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
	var core_1 = __webpack_require__(1);
	var user_1 = __webpack_require__(411);
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

/***/ 413:
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
	var core_1 = __webpack_require__(1);
	var user_1 = __webpack_require__(411);
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

/***/ 414:
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
	var core_1 = __webpack_require__(1);
	var ngif_directive_1 = __webpack_require__(415);
	var ngfor_directive_1 = __webpack_require__(417);
	var ngswitch_directive_1 = __webpack_require__(418);
	var ngclass_directive_1 = __webpack_require__(419);
	var ngstyle_directive_1 = __webpack_require__(420);
	var nglocalization_directive_1 = __webpack_require__(421);
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

/***/ 415:
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
	var core_1 = __webpack_require__(1);
	var hello_1 = __webpack_require__(416);
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

/***/ 416:
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
	var core_1 = __webpack_require__(1);
	var Hello = (function () {
	    function Hello() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], Hello.prototype, "msg", void 0);
	    Hello = __decorate([
	        core_1.Component({
	            selector: 'hello',
	            template: "\n  <h4>\n    Message: {{msg}}\n  </h4>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Hello);
	    return Hello;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Hello;


/***/ },

/***/ 417:
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
	var core_1 = __webpack_require__(1);
	var hello_1 = __webpack_require__(416);
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

/***/ 418:
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
	var core_1 = __webpack_require__(1);
	var hello_1 = __webpack_require__(416);
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

/***/ 419:
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
	var core_1 = __webpack_require__(1);
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
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgClassDirective.prototype, "isDisabled", void 0);
	    NgClassDirective = __decorate([
	        core_1.Component({
	            selector: 'ngclass-directive',
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

/***/ 420:
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
	var core_1 = __webpack_require__(1);
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

/***/ 421:
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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
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

/***/ 422:
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
	var core_1 = __webpack_require__(1);
	var demo_component_1 = __webpack_require__(423);
	var service1_1 = __webpack_require__(402);
	var service2_1 = __webpack_require__(409);
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

/***/ 423:
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
	var core_1 = __webpack_require__(1);
	var service1_1 = __webpack_require__(402);
	var service2_1 = __webpack_require__(409);
	var todo_service_1 = __webpack_require__(397);
	var di_tree_1 = __webpack_require__(399);
	var DemoComponent = (function () {
	    function DemoComponent(s1, s2, fs, di) {
	        this.s1 = s1;
	        this.s2 = s2;
	        this.fs = fs;
	        this.di = di;
	        this.newMsg = new core_1.EventEmitter();
	        this.size = '50px';
	        this.bgcolor = 'white';
	        this.padding = '10px';
	        this.textcolor = 'slategrey';
	    }
	    DemoComponent.prototype.changeMsg = function ($event) {
	        this.msg = $event.target.value;
	        this.newMsg.emit(this.msg);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DemoComponent.prototype, "msg", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DemoComponent.prototype, "newMsg", void 0);
	    DemoComponent = __decorate([
	        core_1.Component({
	            selector: 'demo-comp',
	            template: "\n  <h1 [ngStyle]=\"{\n    'padding': padding,\n    'color': textcolor,\n    'font-size': size,\n    'background-color': bgcolor\n  }\">\n     {{msg}}\n   </h1>\n   <label>Message: <input type=\"text\" [value]=\"msg\"\n   (change)=\"changeMsg($event)\"></label>\n ",
	            providers: [di_tree_1.default]
	        }), 
	        __metadata('design:paramtypes', [service1_1.default, service2_1.default, todo_service_1.FormatService, di_tree_1.default])
	    ], DemoComponent);
	    return DemoComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DemoComponent;


/***/ },

/***/ 424:
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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(112);
	// StressComponent wraps a list item around an Angular 2 component
	// for Augury to detect.
	var StressItem = (function () {
	    function StressItem() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], StressItem.prototype, "value", void 0);
	    StressItem = __decorate([
	        core_1.Component({
	            selector: 'stress-item',
	            template: "\n    <li>{{value}}</li>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StressItem);
	    return StressItem;
	}());
	var StressRecItem = (function () {
	    function StressRecItem() {
	    }
	    StressRecItem.prototype.ngOnInit = function () {
	        this.value -= 1;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], StressRecItem.prototype, "value", void 0);
	    StressRecItem = __decorate([
	        core_1.Component({
	            selector: 'stress-rec-item',
	            directives: [StressRecItem],
	            template: "\n    <ul>\n        <li>{{value}}</li>\n        <li *ngIf=\"value > 0\">\n            <stress-rec-item [value]=\"value\"></stress-rec-item>\n        </li>  \n    </ul>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StressRecItem);
	    return StressRecItem;
	}());
	var StressTester = (function () {
	    function StressTester() {
	        this.values = [];
	    }
	    StressTester.prototype.onSubmit = function (regFormRec) {
	        for (var i = 0; i < regFormRec.value.count; i++) {
	            this.values.push(i);
	        }
	    };
	    StressTester.prototype.onSubmitRec = function (regForm) {
	        this.value = regForm.value.count;
	    };
	    StressTester = __decorate([
	        core_1.Component({
	            selector: 'stress-tester',
	            directives: [common_1.FORM_DIRECTIVES, common_1.NgForm, StressRecItem, StressItem],
	            template: "\n  <div>\n    <p>Deep Tree Test</p>\n    <form #regFormRec=\"ngForm\" (ngSubmit)=\"onSubmitRec(regFormRec)\" novalidate>\n      <div>\n        <label for=\"node-count\">Specify Depth of Tree: </label>\n        <input type=\"number\" id=\"node-count\" ngControl=\"count\">\n      </div>\n      <button type=\"submit\">Run</button>\n    </form>\n    <br>\n    <div *ngIf=\"value\" [hidden]=\"value\">\n      <stress-rec-item [value]=\"value\"></stress-rec-item>\n    </div>\n    <div>\n      <p>Single parent many children test.</p>\n      <form #regForm=\"ngForm\" (ngSubmit)=\"onSubmit(regForm)\" novalidate>\n        <div>\n          <label for=\"node-count\">Specify number of children: </label>\n          <input type=\"number\" id=\"node-count\" ngControl=\"count\">\n        </div>\n        <button type=\"submit\">Run</button>\n      </form>\n      <br>\n      <div *ngIf=\"values\" [hidden]=\"values\">\n        <stress-item *ngFor=\"let i of values\" [value]=\"i\"></stress-item>\n      </div>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StressTester);
	    return StressTester;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StressTester;


/***/ },

/***/ 425:
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
	var core_1 = __webpack_require__(1);
	var MetadataFromArray = (function () {
	    function MetadataFromArray() {
	    }
	    MetadataFromArray = __decorate([
	        core_1.Component({
	            selector: 'attr-from-array',
	            inputs: ['attrIn'],
	            outputs: ['attrOut'],
	            template: "<p>{{attrIn}}</p>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MetadataFromArray);
	    return MetadataFromArray;
	}());
	exports.MetadataFromArray = MetadataFromArray;
	var MetadataFromDecorator = (function () {
	    function MetadataFromDecorator() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MetadataFromDecorator.prototype, "attrIn", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MetadataFromDecorator.prototype, "attrOut", void 0);
	    MetadataFromDecorator = __decorate([
	        core_1.Component({
	            selector: 'attr-from-decorator',
	            template: "<p>{{attrIn}}</p>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MetadataFromDecorator);
	    return MetadataFromDecorator;
	}());
	exports.MetadataFromDecorator = MetadataFromDecorator;
	var MetadataFromArrayWithCustomName = (function () {
	    function MetadataFromArrayWithCustomName() {
	    }
	    MetadataFromArrayWithCustomName = __decorate([
	        core_1.Component({
	            selector: 'attr-from-array-custom',
	            inputs: ['attrIn:attrCustomIn'],
	            outputs: ['attrOut'],
	            template: "<p>{{attrIn}}</p>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MetadataFromArrayWithCustomName);
	    return MetadataFromArrayWithCustomName;
	}());
	exports.MetadataFromArrayWithCustomName = MetadataFromArrayWithCustomName;
	var MetadataFromDecoratorWithCustomName = (function () {
	    function MetadataFromDecoratorWithCustomName() {
	    }
	    __decorate([
	        core_1.Input('attrCustomIn'), 
	        __metadata('design:type', Object)
	    ], MetadataFromDecoratorWithCustomName.prototype, "attrIn", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MetadataFromDecoratorWithCustomName.prototype, "attrOut", void 0);
	    MetadataFromDecoratorWithCustomName = __decorate([
	        core_1.Component({
	            selector: 'attr-from-decorator-custom',
	            template: "<p>{{attrIn}}</p>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MetadataFromDecoratorWithCustomName);
	    return MetadataFromDecoratorWithCustomName;
	}());
	exports.MetadataFromDecoratorWithCustomName = MetadataFromDecoratorWithCustomName;
	var MetadataTest = (function () {
	    function MetadataTest() {
	    }
	    MetadataTest = __decorate([
	        core_1.Component({
	            selector: 'metadata-test',
	            directives: [
	                MetadataFromArray,
	                MetadataFromDecorator,
	                MetadataFromArrayWithCustomName,
	                MetadataFromDecoratorWithCustomName
	            ],
	            template: "\n    <attr-from-array attrIn='Data from the array.'>\n    </attr-from-array>\n\n    <attr-from-decorator attrIn='Data from the decorator.'>\n    </attr-from-decorator>\n\n    <attr-from-array-custom attrCustomIn='Data from array using a custom name.'>\n    </attr-from-array-custom>\n\n    <attr-from-decorator-custom \n      attrCustomIn='Data from decorator using a custom name.'>\n    </attr-from-decorator-custom>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MetadataTest);
	    return MetadataTest;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MetadataTest;


/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var start_1 = __webpack_require__(427);
	var start_child_1 = __webpack_require__(428);
	var start_main_1 = __webpack_require__(429);
	var inner_child_1 = __webpack_require__(430);
	var router_data1_1 = __webpack_require__(431);
	var router_data2_1 = __webpack_require__(432);
	var aux_comp_1 = __webpack_require__(433);
	var inner_child2_1 = __webpack_require__(434);
	var inner_child_main_1 = __webpack_require__(435);
	exports.RouterRoutes = [
	    { path: 'start', component: start_1.default, children: [
	            { path: 'main', component: start_main_1.default },
	            { path: 'auxcomp', component: aux_comp_1.default, outlet: 'aux' },
	            { path: 'child', component: start_child_1.default },
	            { path: 'router-data1/:name', component: router_data1_1.default },
	            { path: 'router-data2/:name/:message', component: router_data2_1.default },
	            { path: 'inner-child', component: inner_child_1.default, children: [
	                    { path: '', component: inner_child_main_1.default },
	                    { path: 'child2', component: inner_child2_1.default }
	                ] },
	        ] }
	];


/***/ },

/***/ 427:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(330);
	var Start = (function () {
	    function Start(router) {
	        this.router = router;
	    }
	    Start.prototype.goToRoute = function (index) {
	        if (index === 0) {
	            this.router.navigate(['/start/main']);
	        }
	        else if (index === 1) {
	            this.router.navigate(['/start/child']);
	        }
	        else if (index === 2) {
	            this.router.navigateByUrl('start/(aux:auxcomp)');
	        }
	        else if (index === 3) {
	            this.router.navigate(['/start/router-data1', 'Message from router']);
	        }
	        else if (index === 4) {
	            this.router.navigate(['/start/router-data2',
	                'Message from router', 'Router Name']);
	        }
	    };
	    Start = __decorate([
	        core_1.Component({
	            selector: 'start',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: "\n  <div>\n    <ul class=\"nav nav-pills\">\n      <li>\n        <a (click)=\"goToRoute(0)\">Start Main</a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(1)\">Start Child</a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(2)\">Open AuxComp</a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(3)\">\n          RouterData1\n        </a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(4)\">\n          RouterData2\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/start', 'inner-child']\">InnerChild</a>\n      </li>\n    </ul>\n    <hr/>\n    <div class=\"inner-outlet\">\n      <router-outlet></router-outlet>\n      <router-outlet name=\"aux\"></router-outlet>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], Start);
	    return Start;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Start;


/***/ },

/***/ 428:
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
	var core_1 = __webpack_require__(1);
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

/***/ 429:
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
	var core_1 = __webpack_require__(1);
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

/***/ 430:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(330);
	var InnerChild = (function () {
	    function InnerChild() {
	    }
	    InnerChild = __decorate([
	        core_1.Component({
	            selector: 'inner-child',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: "\n  <div>\n    <h3>InnerChild Component</h3>\n    <ul class=\"nav nav-pills nav-inverse\">\n      <li><a [routerLink]=\"['./']\">InnerChildMain</a></li>\n      <li><a [routerLink]=\"['child2']\">InnerChild2</a></li>\n    </ul>\n    <hr/>\n    <router-outlet></router-outlet>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InnerChild);
	    return InnerChild;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = InnerChild;


/***/ },

/***/ 431:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(330);
	var RouterData1 = (function () {
	    function RouterData1(activatedRoute) {
	        this.activatedRoute = activatedRoute;
	    }
	    RouterData1.prototype.ngOnInit = function () {
	        var _this = this;
	        this.params$ = this.activatedRoute.params.subscribe(function (params) {
	            _this.message = params['name'];
	        });
	    };
	    RouterData1.prototype.ngOnDestroy = function () {
	        this.params$.unsubscribe();
	    };
	    RouterData1 = __decorate([
	        core_1.Component({
	            selector: 'aux-comp',
	            template: "\n  <div>\n    <h3>Hello There!!</h3>\n    <h4>Message: {{message}}</h4>\n    <h4>Data: {{data}}</h4>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_1.ActivatedRoute])
	    ], RouterData1);
	    return RouterData1;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RouterData1;


/***/ },

/***/ 432:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(330);
	var RouterData2 = (function () {
	    function RouterData2(activatedRoute) {
	        this.activatedRoute = activatedRoute;
	    }
	    RouterData2.prototype.ngOnInit = function () {
	        var _this = this;
	        this.params$ = this.activatedRoute.params.subscribe(function (params) {
	            _this.name = params['name'];
	            _this.message = params['message'];
	        });
	    };
	    RouterData2.prototype.ngOnDestroy = function () {
	        this.params$.unsubscribe();
	    };
	    RouterData2 = __decorate([
	        core_1.Component({
	            selector: 'aux-comp',
	            template: "\n  <div>\n    <h3>Hello There!!</h3>\n    <h4>Message: {{message}}</h4>\n    <h4>Name: {{name}}</h4>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_1.ActivatedRoute])
	    ], RouterData2);
	    return RouterData2;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RouterData2;


/***/ },

/***/ 433:
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
	var core_1 = __webpack_require__(1);
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

/***/ 434:
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
	var core_1 = __webpack_require__(1);
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

/***/ 435:
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
	var core_1 = __webpack_require__(1);
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

/***/ 436:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(330);
	var camelcase_1 = __webpack_require__(437);
	var KitchenSink = (function () {
	    function KitchenSink(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.path = '';
	        router.events.subscribe(function (data) {
	            _this.path = data.url.substr(1);
	        });
	    }
	    KitchenSink = __decorate([
	        core_1.Component({
	            selector: 'kitchen-sink',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            pipes: [camelcase_1.CamelCasePipe],
	            template: "\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <ul class=\"nav nav-pills nav-stacked\">\n      <li [ngClass]=\"{active: path==''}\">\n        <a [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li [ngClass]=\"{active: path=='demo'}\">\n        <a [routerLink]=\"['/demo']\">Demo</a>\n      </li>\n      <li [ngClass]=\"{active: path=='control-form'}\">\n        <a [routerLink]=\"['/control-form']\">ControlForm</a>\n      </li>\n      <li [ngClass]=\"{active: path=='my-form'}\">\n        <a [routerLink]=\"['/my-form']\">Form Component</a>\n      </li>\n      <li [ngClass]=\"{active: path=='form2'}\">\n        <a [routerLink]=\"['/form2']\">NgModel Form</a>\n      </li>\n      <li [ngClass]=\"{active: path=='input-output'}\">\n        <a [routerLink]=\"['/input-output']\">InputOutput</a>\n      </li>\n      <li [ngClass]=\"{active: path.indexOf('start') > -1}\">\n        <a [routerLink]=\"['/start/main']\">Router</a>\n      </li>\n      <li [ngClass]=\"{active: path=='dynamic-controls'}\">\n        <a [routerLink]=\"['/dynamic-controls']\">DynamicControls</a>\n      </li>\n      <li [ngClass]=\"{active: path=='todo-app'}\">\n        <a [routerLink]=\"['/todo-app']\">TodoApp</a>\n      </li>\n      <li [ngClass]=\"{active: path=='di-tree'}\">\n        <a [routerLink]=\"['/di-tree']\">DITree</a>\n      </li>\n      <li [ngClass]=\"{active: path=='angular-directives'}\">\n        <a [routerLink]=\"['/angular-directives']\">AngularDirectives</a>\n      </li>\n      <li [ngClass]=\"{active: path=='change-detection'}\">\n        <a [routerLink]=\"['/change-detection']\">ChangeDetection</a>\n      </li>\n      <li [ngClass]=\"{active: path=='stress-tester'}\">\n        <a [routerLink]=\"['./stress-tester']\">StressTester</a>\n      </li>\n      <li [ngClass]=\"{active: path=='metadata-test'}\">\n        <a [routerLink]=\"['./metadata-test']\">MetadataTest</a>\n      </li>\n      </ul>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{path || 'home' | camelcase }}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
	    ], KitchenSink);
	    return KitchenSink;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = KitchenSink;


/***/ },

/***/ 437:
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
	var core_1 = __webpack_require__(1);
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


/***/ }

});
//# sourceMappingURL=app.b6e1337c7743fbeb2382.bundle.js.map