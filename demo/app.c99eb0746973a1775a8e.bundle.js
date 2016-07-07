webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(111);
	var platform_browser_dynamic_1 = __webpack_require__(175);
	var app_routes_1 = __webpack_require__(328);
	var kitchen_sink_1 = __webpack_require__(382);
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(329);
	var kitchen_sink_1 = __webpack_require__(382);
	// import { StartRouter } from './components/router/start';
	exports.routes = kitchen_sink_1.KitchenSinkRoutes.slice();
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var router_link_1 = __webpack_require__(330);
	var router_link_active_1 = __webpack_require__(378);
	var router_outlet_1 = __webpack_require__(379);
	var router_link_2 = __webpack_require__(330);
	exports.RouterLink = router_link_2.RouterLink;
	exports.RouterLinkWithHref = router_link_2.RouterLinkWithHref;
	var router_link_active_2 = __webpack_require__(378);
	exports.RouterLinkActive = router_link_active_2.RouterLinkActive;
	var router_outlet_2 = __webpack_require__(379);
	exports.RouterOutlet = router_outlet_2.RouterOutlet;
	var router_1 = __webpack_require__(331);
	exports.NavigationCancel = router_1.NavigationCancel;
	exports.NavigationEnd = router_1.NavigationEnd;
	exports.NavigationError = router_1.NavigationError;
	exports.NavigationStart = router_1.NavigationStart;
	exports.Router = router_1.Router;
	exports.RoutesRecognized = router_1.RoutesRecognized;
	var router_outlet_map_1 = __webpack_require__(377);
	exports.RouterOutletMap = router_outlet_map_1.RouterOutletMap;
	var router_providers_1 = __webpack_require__(380);
	exports.provideRouter = router_providers_1.provideRouter;
	var router_state_1 = __webpack_require__(370);
	exports.ActivatedRoute = router_state_1.ActivatedRoute;
	exports.ActivatedRouteSnapshot = router_state_1.ActivatedRouteSnapshot;
	exports.RouterState = router_state_1.RouterState;
	exports.RouterStateSnapshot = router_state_1.RouterStateSnapshot;
	var shared_1 = __webpack_require__(363);
	exports.PRIMARY_OUTLET = shared_1.PRIMARY_OUTLET;
	var url_tree_1 = __webpack_require__(364);
	exports.DefaultUrlSerializer = url_tree_1.DefaultUrlSerializer;
	exports.UrlPathWithParams = url_tree_1.UrlPathWithParams;
	exports.UrlSerializer = url_tree_1.UrlSerializer;
	exports.UrlTree = url_tree_1.UrlTree;
	/**
	 * @stable
	 */
	exports.ROUTER_DIRECTIVES = [router_outlet_1.RouterOutlet, router_link_1.RouterLink, router_link_1.RouterLinkWithHref, router_link_active_1.RouterLinkActive];
	//# sourceMappingURL=index.js.map

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var common_1 = __webpack_require__(111);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(331);
	var router_state_1 = __webpack_require__(370);
	var RouterLink = (function () {
	    function RouterLink(router, route, locationStrategy) {
	        this.router = router;
	        this.route = route;
	        this.locationStrategy = locationStrategy;
	        this.commands = [];
	    }
	    Object.defineProperty(RouterLink.prototype, "routerLink", {
	        set: function (data) {
	            if (Array.isArray(data)) {
	                this.commands = data;
	            }
	            else {
	                this.commands = [data];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLink.prototype.onClick = function (button, ctrlKey, metaKey) {
	        if (button !== 0 || ctrlKey || metaKey) {
	            return true;
	        }
	        this.router.navigate(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment });
	        return false;
	    };
	    /** @nocollapse */
	    RouterLink.decorators = [
	        { type: core_1.Directive, args: [{ selector: ':not(a)[routerLink]' },] },
	    ];
	    /** @nocollapse */
	    RouterLink.ctorParameters = [
	        { type: router_1.Router, },
	        { type: router_state_1.ActivatedRoute, },
	        { type: common_1.LocationStrategy, },
	    ];
	    /** @nocollapse */
	    RouterLink.propDecorators = {
	        'queryParams': [{ type: core_1.Input },],
	        'fragment': [{ type: core_1.Input },],
	        'routerLink': [{ type: core_1.Input },],
	        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
	    };
	    return RouterLink;
	}());
	exports.RouterLink = RouterLink;
	var RouterLinkWithHref = (function () {
	    /**
	     * @internal
	     */
	    function RouterLinkWithHref(router, route, locationStrategy) {
	        this.router = router;
	        this.route = route;
	        this.locationStrategy = locationStrategy;
	        this.commands = [];
	    }
	    Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
	        set: function (data) {
	            if (Array.isArray(data)) {
	                this.commands = data;
	            }
	            else {
	                this.commands = [data];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
	    RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey) {
	        if (button !== 0 || ctrlKey || metaKey) {
	            return true;
	        }
	        if (typeof this.target === 'string' && this.target != '_self') {
	            return true;
	        }
	        this.router.navigateByUrl(this.urlTree);
	        return false;
	    };
	    RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
	        this.urlTree = this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment });
	        if (this.urlTree) {
	            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
	        }
	    };
	    /** @nocollapse */
	    RouterLinkWithHref.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'a[routerLink]' },] },
	    ];
	    /** @nocollapse */
	    RouterLinkWithHref.ctorParameters = [
	        { type: router_1.Router, },
	        { type: router_state_1.ActivatedRoute, },
	        { type: common_1.LocationStrategy, },
	    ];
	    /** @nocollapse */
	    RouterLinkWithHref.propDecorators = {
	        'target': [{ type: core_1.Input },],
	        'queryParams': [{ type: core_1.Input },],
	        'fragment': [{ type: core_1.Input },],
	        'href': [{ type: core_1.HostBinding },],
	        'routerLink': [{ type: core_1.Input },],
	        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
	    };
	    return RouterLinkWithHref;
	}());
	exports.RouterLinkWithHref = RouterLinkWithHref;
	//# sourceMappingURL=router_link.js.map

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	__webpack_require__(332);
	__webpack_require__(334);
	__webpack_require__(341);
	__webpack_require__(343);
	__webpack_require__(345);
	__webpack_require__(347);
	__webpack_require__(358);
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(34);
	var Subject_1 = __webpack_require__(33);
	var of_1 = __webpack_require__(361);
	var apply_redirects_1 = __webpack_require__(362);
	var config_1 = __webpack_require__(366);
	var create_router_state_1 = __webpack_require__(367);
	var create_url_tree_1 = __webpack_require__(372);
	var recognize_1 = __webpack_require__(373);
	var resolve_1 = __webpack_require__(374);
	var router_outlet_map_1 = __webpack_require__(377);
	var router_state_1 = __webpack_require__(370);
	var shared_1 = __webpack_require__(363);
	var url_tree_1 = __webpack_require__(364);
	var collection_1 = __webpack_require__(365);
	/**
	 * An event triggered when a navigation starts
	 *
	 * @stable
	 */
	var NavigationStart = (function () {
	    function NavigationStart(id, url) {
	        this.id = id;
	        this.url = url;
	    }
	    NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
	    return NavigationStart;
	}());
	exports.NavigationStart = NavigationStart;
	/**
	 * An event triggered when a navigation ends successfully
	 *
	 * @stable
	 */
	var NavigationEnd = (function () {
	    function NavigationEnd(id, url, urlAfterRedirects) {
	        this.id = id;
	        this.url = url;
	        this.urlAfterRedirects = urlAfterRedirects;
	    }
	    NavigationEnd.prototype.toString = function () {
	        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
	    };
	    return NavigationEnd;
	}());
	exports.NavigationEnd = NavigationEnd;
	/**
	 * An event triggered when a navigation is canceled
	 *
	 * @stable
	 */
	var NavigationCancel = (function () {
	    function NavigationCancel(id, url) {
	        this.id = id;
	        this.url = url;
	    }
	    NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
	    return NavigationCancel;
	}());
	exports.NavigationCancel = NavigationCancel;
	/**
	 * An event triggered when a navigation fails due to unexpected error
	 *
	 * @stable
	 */
	var NavigationError = (function () {
	    function NavigationError(id, url, error) {
	        this.id = id;
	        this.url = url;
	        this.error = error;
	    }
	    NavigationError.prototype.toString = function () {
	        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
	    };
	    return NavigationError;
	}());
	exports.NavigationError = NavigationError;
	/**
	 * An event triggered when routes are recognized
	 *
	 * @stable
	 */
	var RoutesRecognized = (function () {
	    function RoutesRecognized(id, url, urlAfterRedirects, state) {
	        this.id = id;
	        this.url = url;
	        this.urlAfterRedirects = urlAfterRedirects;
	        this.state = state;
	    }
	    RoutesRecognized.prototype.toString = function () {
	        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
	    };
	    return RoutesRecognized;
	}());
	exports.RoutesRecognized = RoutesRecognized;
	/**
	 * The `Router` is responsible for mapping URLs to components.
	 *
	 * See {@link RouterConfig) for more details and examples.
	 *
	 * @stable
	 */
	var Router = (function () {
	    /**
	     * Creates the router service.
	     */
	    function Router(rootComponentType, resolver, urlSerializer, outletMap, location, injector, config) {
	        this.rootComponentType = rootComponentType;
	        this.resolver = resolver;
	        this.urlSerializer = urlSerializer;
	        this.outletMap = outletMap;
	        this.location = location;
	        this.injector = injector;
	        this.navigationId = 0;
	        this.resetConfig(config);
	        this.routerEvents = new Subject_1.Subject();
	        this.currentUrlTree = url_tree_1.createEmptyUrlTree();
	        this.currentRouterState = router_state_1.createEmptyState(this.currentUrlTree, this.rootComponentType);
	    }
	    /**
	     * @internal
	     */
	    Router.prototype.initialNavigation = function () {
	        this.setUpLocationChangeListener();
	        this.navigateByUrl(this.location.path(true));
	    };
	    Object.defineProperty(Router.prototype, "routerState", {
	        /**
	         * Returns the current route state.
	         */
	        get: function () { return this.currentRouterState; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Router.prototype, "url", {
	        /**
	         * Returns the current url.
	         */
	        get: function () { return this.serializeUrl(this.currentUrlTree); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Router.prototype, "events", {
	        /**
	         * Returns an observable of route events
	         */
	        get: function () { return this.routerEvents; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Resets the configuration used for navigation and generating links.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.resetConfig([
	     *  { path: 'team/:id', component: TeamCmp, children: [
	     *    { path: 'simple', component: SimpleCmp },
	     *    { path: 'user/:name', component: UserCmp }
	     *  ] }
	     * ]);
	     * ```
	     */
	    Router.prototype.resetConfig = function (config) {
	        config_1.validateConfig(config);
	        this.config = config;
	    };
	    /**
	     * @internal
	     */
	    Router.prototype.dispose = function () { this.locationSubscription.unsubscribe(); };
	    /**
	     * Applies an array of commands to the current url tree and creates
	     * a new url tree.
	     *
	     * When given an activate route, applies the given commands starting from the route.
	     * When not given a route, applies the given command starting from the root.
	     *
	     * ### Usage
	     *
	     * ```
	     * // create /team/33/user/11
	     * router.createUrlTree(['/team', 33, 'user', 11]);
	     *
	     * // create /team/33;expand=true/user/11
	     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
	     *
	     * // you can collapse static fragments like this
	     * router.createUrlTree(['/team/33/user', userId]);
	     *
	     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
	     *
	     * // navigate to /team/33/user/11/details
	     * router.createUrlTree(['details'], {relativeTo: route});
	     *
	     * // navigate to /team/33/user/22
	     * router.createUrlTree(['../22'], {relativeTo: route});
	     *
	     * // navigate to /team/44/user/22
	     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
	     * ```
	     */
	    Router.prototype.createUrlTree = function (commands, _a) {
	        var _b = _a === void 0 ? {} : _a, relativeTo = _b.relativeTo, queryParams = _b.queryParams, fragment = _b.fragment;
	        var a = relativeTo ? relativeTo : this.routerState.root;
	        return create_url_tree_1.createUrlTree(a, this.currentUrlTree, commands, queryParams, fragment);
	    };
	    /**
	     * Navigate based on the provided url. This navigation is always absolute.
	     *
	     * Returns a promise that:
	     * - is resolved with 'true' when navigation succeeds
	     * - is resolved with 'false' when navigation fails
	     * - is rejected when an error happens
	     *
	     * ### Usage
	     *
	     * ```
	     * router.navigateByUrl("/team/33/user/11");
	     * ```
	     */
	    Router.prototype.navigateByUrl = function (url) {
	        if (url instanceof url_tree_1.UrlTree) {
	            return this.scheduleNavigation(url, false);
	        }
	        else {
	            var urlTree = this.urlSerializer.parse(url);
	            return this.scheduleNavigation(urlTree, false);
	        }
	    };
	    /**
	     * Navigate based on the provided array of commands and a starting point.
	     * If no starting route is provided, the navigation is absolute.
	     *
	     * Returns a promise that:
	     * - is resolved with 'true' when navigation succeeds
	     * - is resolved with 'false' when navigation fails
	     * - is rejected when an error happens
	     *
	     * ### Usage
	     *
	     * ```
	     * router.navigate(['team', 33, 'team', '11], {relativeTo: route});
	     * ```
	     */
	    Router.prototype.navigate = function (commands, extras) {
	        if (extras === void 0) { extras = {}; }
	        return this.scheduleNavigation(this.createUrlTree(commands, extras), false);
	    };
	    /**
	     * Serializes a {@link UrlTree} into a string.
	     */
	    Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
	    /**
	     * Parse a string into a {@link UrlTree}.
	     */
	    Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
	    Router.prototype.scheduleNavigation = function (url, preventPushState) {
	        var _this = this;
	        var id = ++this.navigationId;
	        this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
	        return Promise.resolve().then(function (_) { return _this.runNavigate(url, preventPushState, id); });
	    };
	    Router.prototype.setUpLocationChangeListener = function () {
	        var _this = this;
	        this.locationSubscription = this.location.subscribe(function (change) {
	            return _this.scheduleNavigation(_this.urlSerializer.parse(change['url']), change['pop']);
	        });
	    };
	    Router.prototype.runNavigate = function (url, preventPushState, id) {
	        var _this = this;
	        if (id !== this.navigationId) {
	            this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
	            this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url)));
	            return Promise.resolve(false);
	        }
	        return new Promise(function (resolvePromise, rejectPromise) {
	            var updatedUrl;
	            var state;
	            var navigationIsSuccessful;
	            var preActivation;
	            apply_redirects_1.applyRedirects(url, _this.config)
	                .mergeMap(function (u) {
	                updatedUrl = u;
	                return recognize_1.recognize(_this.rootComponentType, _this.config, updatedUrl, _this.serializeUrl(updatedUrl));
	            })
	                .mergeMap(function (newRouterStateSnapshot) {
	                _this.routerEvents.next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(updatedUrl), newRouterStateSnapshot));
	                return resolve_1.resolve(_this.resolver, newRouterStateSnapshot);
	            })
	                .map(function (routerStateSnapshot) {
	                return create_router_state_1.createRouterState(routerStateSnapshot, _this.currentRouterState);
	            })
	                .map(function (newState) {
	                state = newState;
	                preActivation =
	                    new PreActivation(state.snapshot, _this.currentRouterState.snapshot, _this.injector);
	                preActivation.traverse(_this.outletMap);
	            })
	                .mergeMap(function (_) {
	                return preActivation.checkGuards();
	            })
	                .mergeMap(function (shouldActivate) {
	                if (shouldActivate) {
	                    return preActivation.resolveData().map(function () { return shouldActivate; });
	                }
	                else {
	                    return of_1.of(shouldActivate);
	                }
	            })
	                .forEach(function (shouldActivate) {
	                if (!shouldActivate || id !== _this.navigationId) {
	                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url)));
	                    navigationIsSuccessful = false;
	                    return;
	                }
	                new ActivateRoutes(state, _this.currentRouterState).activate(_this.outletMap);
	                _this.currentUrlTree = updatedUrl;
	                _this.currentRouterState = state;
	                if (!preventPushState) {
	                    var path = _this.urlSerializer.serialize(updatedUrl);
	                    if (_this.location.isCurrentPathEqualTo(path)) {
	                        _this.location.replaceState(path);
	                    }
	                    else {
	                        _this.location.go(path);
	                    }
	                }
	                navigationIsSuccessful = true;
	            })
	                .then(function () {
	                _this.routerEvents.next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(updatedUrl)));
	                resolvePromise(navigationIsSuccessful);
	            }, function (e) {
	                _this.routerEvents.next(new NavigationError(id, _this.serializeUrl(url), e));
	                rejectPromise(e);
	            });
	        });
	    };
	    return Router;
	}());
	exports.Router = Router;
	/**
	 * @experimental
	 */
	var CanActivate = (function () {
	    function CanActivate(route) {
	        this.route = route;
	    }
	    return CanActivate;
	}());
	/**
	 * @experimental
	 */
	var CanDeactivate = (function () {
	    function CanDeactivate(component, route) {
	        this.component = component;
	        this.route = route;
	    }
	    return CanDeactivate;
	}());
	var PreActivation = (function () {
	    function PreActivation(future, curr, injector) {
	        this.future = future;
	        this.curr = curr;
	        this.injector = injector;
	        this.checks = [];
	    }
	    PreActivation.prototype.traverse = function (parentOutletMap) {
	        var futureRoot = this.future._root;
	        var currRoot = this.curr ? this.curr._root : null;
	        this.traverseChildRoutes(futureRoot, currRoot, parentOutletMap);
	    };
	    PreActivation.prototype.checkGuards = function () {
	        var _this = this;
	        if (this.checks.length === 0)
	            return of_1.of(true);
	        return Observable_1.Observable.from(this.checks)
	            .map(function (s) {
	            if (s instanceof CanActivate) {
	                return _this.runCanActivate(s.route);
	            }
	            else if (s instanceof CanDeactivate) {
	                // workaround https://github.com/Microsoft/TypeScript/issues/7271
	                var s2 = s;
	                return _this.runCanDeactivate(s2.component, s2.route);
	            }
	            else {
	                throw new Error('Cannot be reached');
	            }
	        })
	            .mergeAll()
	            .every(function (result) { return result === true; });
	    };
	    PreActivation.prototype.resolveData = function () {
	        var _this = this;
	        if (this.checks.length === 0)
	            return of_1.of(null);
	        return Observable_1.Observable.from(this.checks)
	            .mergeMap(function (s) {
	            if (s instanceof CanActivate) {
	                return _this.runResolve(s.route);
	            }
	            else {
	                return of_1.of(null);
	            }
	        })
	            .reduce(function (_, __) { return _; });
	    };
	    PreActivation.prototype.traverseChildRoutes = function (futureNode, currNode, outletMap) {
	        var _this = this;
	        var prevChildren = nodeChildrenAsMap(currNode);
	        futureNode.children.forEach(function (c) {
	            _this.traverseRoutes(c, prevChildren[c.value.outlet], outletMap);
	            delete prevChildren[c.value.outlet];
	        });
	        collection_1.forEach(prevChildren, function (v, k) { return _this.deactivateOutletAndItChildren(v, outletMap._outlets[k]); });
	    };
	    PreActivation.prototype.traverseRoutes = function (futureNode, currNode, parentOutletMap) {
	        var future = futureNode.value;
	        var curr = currNode ? currNode.value : null;
	        var outlet = parentOutletMap ? parentOutletMap._outlets[futureNode.value.outlet] : null;
	        // reusing the node
	        if (curr && future._routeConfig === curr._routeConfig) {
	            if (!collection_1.shallowEqual(future.params, curr.params)) {
	                this.checks.push(new CanDeactivate(outlet.component, curr), new CanActivate(future));
	            }
	            // If we have a component, we need to go through an outlet.
	            if (future.component) {
	                this.traverseChildRoutes(futureNode, currNode, outlet ? outlet.outletMap : null);
	            }
	            else {
	                this.traverseChildRoutes(futureNode, currNode, parentOutletMap);
	            }
	        }
	        else {
	            if (curr) {
	                // if we had a normal route, we need to deactivate only that outlet.
	                if (curr.component) {
	                    this.deactivateOutletAndItChildren(curr, outlet);
	                }
	                else {
	                    this.deactivateOutletMap(parentOutletMap);
	                }
	            }
	            this.checks.push(new CanActivate(future));
	            // If we have a component, we need to go through an outlet.
	            if (future.component) {
	                this.traverseChildRoutes(futureNode, null, outlet ? outlet.outletMap : null);
	            }
	            else {
	                this.traverseChildRoutes(futureNode, null, parentOutletMap);
	            }
	        }
	    };
	    PreActivation.prototype.deactivateOutletAndItChildren = function (route, outlet) {
	        if (outlet && outlet.isActivated) {
	            this.deactivateOutletMap(outlet.outletMap);
	            this.checks.push(new CanDeactivate(outlet.component, route));
	        }
	    };
	    PreActivation.prototype.deactivateOutletMap = function (outletMap) {
	        var _this = this;
	        collection_1.forEach(outletMap._outlets, function (v) {
	            if (v.isActivated) {
	                _this.deactivateOutletAndItChildren(v.activatedRoute.snapshot, v);
	            }
	        });
	    };
	    PreActivation.prototype.runCanActivate = function (future) {
	        var _this = this;
	        var canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
	        if (!canActivate || canActivate.length === 0)
	            return of_1.of(true);
	        return Observable_1.Observable.from(canActivate)
	            .map(function (c) {
	            var guard = _this.injector.get(c);
	            if (guard.canActivate) {
	                return wrapIntoObservable(guard.canActivate(future, _this.future));
	            }
	            else {
	                return wrapIntoObservable(guard(future, _this.future));
	            }
	        })
	            .mergeAll()
	            .every(function (result) { return result === true; });
	    };
	    PreActivation.prototype.runCanDeactivate = function (component, curr) {
	        var _this = this;
	        var canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
	        if (!canDeactivate || canDeactivate.length === 0)
	            return of_1.of(true);
	        return Observable_1.Observable.from(canDeactivate)
	            .map(function (c) {
	            var guard = _this.injector.get(c);
	            if (guard.canDeactivate) {
	                return wrapIntoObservable(guard.canDeactivate(component, curr, _this.curr));
	            }
	            else {
	                return wrapIntoObservable(guard(component, curr, _this.curr));
	            }
	        })
	            .mergeAll()
	            .every(function (result) { return result === true; });
	    };
	    PreActivation.prototype.runResolve = function (future) {
	        var resolve = future._resolve;
	        return this.resolveNode(resolve.current, future).map(function (resolvedData) {
	            resolve.resolvedData = resolvedData;
	            future.data = collection_1.merge(future.data, resolve.flattenedResolvedData);
	            return null;
	        });
	    };
	    PreActivation.prototype.resolveNode = function (resolve, future) {
	        var _this = this;
	        var resolvingObs = [];
	        var resolvedData = {};
	        collection_1.forEach(resolve, function (v, k) {
	            var resolver = _this.injector.get(v);
	            var obs = resolver.resolve ? wrapIntoObservable(resolver.resolve(future, _this.future)) :
	                wrapIntoObservable(resolver(future, _this.future));
	            resolvingObs.push(obs.map(function (_) { resolvedData[k] = _; }));
	        });
	        if (resolvingObs.length > 0) {
	            return Observable_1.Observable.forkJoin(resolvingObs).map(function (r) { return resolvedData; });
	        }
	        else {
	            return of_1.of(resolvedData);
	        }
	    };
	    return PreActivation;
	}());
	function wrapIntoObservable(value) {
	    if (value instanceof Observable_1.Observable) {
	        return value;
	    }
	    else {
	        return of_1.of(value);
	    }
	}
	var ActivateRoutes = (function () {
	    function ActivateRoutes(futureState, currState) {
	        this.futureState = futureState;
	        this.currState = currState;
	    }
	    ActivateRoutes.prototype.activate = function (parentOutletMap) {
	        var futureRoot = this.futureState._root;
	        var currRoot = this.currState ? this.currState._root : null;
	        pushQueryParamsAndFragment(this.futureState);
	        router_state_1.advanceActivatedRoute(this.futureState.root);
	        this.activateChildRoutes(futureRoot, currRoot, parentOutletMap);
	    };
	    ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, outletMap) {
	        var _this = this;
	        var prevChildren = nodeChildrenAsMap(currNode);
	        futureNode.children.forEach(function (c) {
	            _this.activateRoutes(c, prevChildren[c.value.outlet], outletMap);
	            delete prevChildren[c.value.outlet];
	        });
	        collection_1.forEach(prevChildren, function (v, k) { return _this.deactivateOutletAndItChildren(outletMap._outlets[k]); });
	    };
	    ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentOutletMap) {
	        var future = futureNode.value;
	        var curr = currNode ? currNode.value : null;
	        // reusing the node
	        if (future === curr) {
	            // advance the route to push the parameters
	            router_state_1.advanceActivatedRoute(future);
	            // If we have a normal route, we need to go through an outlet.
	            if (future.component) {
	                var outlet = getOutlet(parentOutletMap, futureNode.value);
	                this.activateChildRoutes(futureNode, currNode, outlet.outletMap);
	            }
	            else {
	                this.activateChildRoutes(futureNode, currNode, parentOutletMap);
	            }
	        }
	        else {
	            if (curr) {
	                // if we had a normal route, we need to deactivate only that outlet.
	                if (curr.component) {
	                    var outlet = getOutlet(parentOutletMap, futureNode.value);
	                    this.deactivateOutletAndItChildren(outlet);
	                }
	                else {
	                    this.deactivateOutletMap(parentOutletMap);
	                }
	            }
	            // if we have a normal route, we need to advance the route
	            // and place the component into the outlet. After that recurse.
	            if (future.component) {
	                router_state_1.advanceActivatedRoute(future);
	                var outlet = getOutlet(parentOutletMap, futureNode.value);
	                var outletMap = new router_outlet_map_1.RouterOutletMap();
	                this.placeComponentIntoOutlet(outletMap, future, outlet);
	                this.activateChildRoutes(futureNode, null, outletMap);
	            }
	            else {
	                router_state_1.advanceActivatedRoute(future);
	                this.activateChildRoutes(futureNode, null, parentOutletMap);
	            }
	        }
	    };
	    ActivateRoutes.prototype.placeComponentIntoOutlet = function (outletMap, future, outlet) {
	        var resolved = core_1.ReflectiveInjector.resolve([
	            { provide: router_state_1.ActivatedRoute, useValue: future },
	            { provide: router_outlet_map_1.RouterOutletMap, useValue: outletMap }
	        ]);
	        outlet.activate(future, resolved, outletMap);
	    };
	    ActivateRoutes.prototype.deactivateOutletAndItChildren = function (outlet) {
	        if (outlet && outlet.isActivated) {
	            this.deactivateOutletMap(outlet.outletMap);
	            outlet.deactivate();
	        }
	    };
	    ActivateRoutes.prototype.deactivateOutletMap = function (outletMap) {
	        var _this = this;
	        collection_1.forEach(outletMap._outlets, function (v) { return _this.deactivateOutletAndItChildren(v); });
	    };
	    return ActivateRoutes;
	}());
	function pushQueryParamsAndFragment(state) {
	    if (!collection_1.shallowEqual(state.snapshot.queryParams, state.queryParams.value)) {
	        state.queryParams.next(state.snapshot.queryParams);
	    }
	    if (state.snapshot.fragment !== state.fragment.value) {
	        state.fragment.next(state.snapshot.fragment);
	    }
	}
	function nodeChildrenAsMap(node) {
	    return node ? node.children.reduce(function (m, c) {
	        m[c.value.outlet] = c;
	        return m;
	    }, {}) : {};
	}
	function getOutlet(outletMap, route) {
	    var outlet = outletMap._outlets[route.outlet];
	    if (!outlet) {
	        var componentName = route.component.name;
	        if (route.outlet === shared_1.PRIMARY_OUTLET) {
	            throw new Error("Cannot find primary outlet to load '" + componentName + "'");
	        }
	        else {
	            throw new Error("Cannot find the outlet " + route.outlet + " to load '" + componentName + "'");
	        }
	    }
	    return outlet;
	}
	//# sourceMappingURL=router.js.map

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var map_1 = __webpack_require__(333);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var mergeMap_1 = __webpack_require__(335);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(336);
	var OuterSubscriber_1 = __webpack_require__(340);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(35);
	var isArray_1 = __webpack_require__(41);
	var isPromise_1 = __webpack_require__(337);
	var Observable_1 = __webpack_require__(34);
	var iterator_1 = __webpack_require__(338);
	var InnerSubscriber_1 = __webpack_require__(339);
	var $$observable = __webpack_require__(48);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        for (var _i = 0, _a = result; _i < _a.length; _i++) {
	            var item = _a[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[$$observable] === 'function') {
	        var obs = result[$$observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 337 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(35);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var mergeAll_1 = __webpack_require__(342);
	Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(340);
	var subscribeToResult_1 = __webpack_require__(336);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var reduce_1 = __webpack_require__(344);
	Observable_1.Observable.prototype.reduce = reduce_1.reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * Applies an accumulator function over the source Observable, and returns the
	 * accumulated result when the source completes, given an optional seed value.
	 *
	 * <span class="informal">Combines together all values emitted on the source,
	 * using an accumulator function that knows how to join a new source value into
	 * the accumulation from the past.</span>
	 *
	 * <img src="./img/reduce.png" width="100%">
	 *
	 * Like
	 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
	 * `reduce` applies an `accumulator` function against an accumulation and each
	 * value of the source Observable (from the past) to reduce it to a single
	 * value, emitted on the output Observable. Note that `reduce` will only emit
	 * one value, only when the source Observable completes. It is equivalent to
	 * applying operator {@link scan} followed by operator {@link last}.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
	 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
	 *   .takeUntil(Rx.Observable.interval(5000));
	 * var ones = clicksInFiveSeconds.mapTo(1);
	 * var seed = 0;
	 * var count = ones.reduce((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link count}
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link scan}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @return {Observable<R>} An Observable that emits a single value that is the
	 * result of accumulating the values emitted by the source Observable.
	 * @method reduce
	 * @owner Observable
	 */
	function reduce(accumulator, seed) {
	    return this.lift(new ReduceOperator(accumulator, seed));
	}
	exports.reduce = reduce;
	var ReduceOperator = (function () {
	    function ReduceOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ReduceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ReduceOperator;
	}());
	exports.ReduceOperator = ReduceOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ReduceSubscriber = (function (_super) {
	    __extends(ReduceSubscriber, _super);
	    function ReduceSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.hasValue = false;
	        this.acc = seed;
	        this.accumulator = accumulator;
	        this.hasSeed = typeof seed !== 'undefined';
	    }
	    ReduceSubscriber.prototype._next = function (value) {
	        if (this.hasValue || (this.hasValue = this.hasSeed)) {
	            this._tryReduce(value);
	        }
	        else {
	            this.acc = value;
	            this.hasValue = true;
	        }
	    };
	    ReduceSubscriber.prototype._tryReduce = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.acc, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.acc = result;
	    };
	    ReduceSubscriber.prototype._complete = function () {
	        if (this.hasValue || this.hasSeed) {
	            this.destination.next(this.acc);
	        }
	        this.destination.complete();
	    };
	    return ReduceSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ReduceSubscriber = ReduceSubscriber;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var every_1 = __webpack_require__(346);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 * @method every
	 * @owner Observable
	 */
	function every(predicate, thisArg) {
	    return this.lift(new EveryOperator(predicate, thisArg, this));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
	    };
	    return EveryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var from_1 = __webpack_require__(348);
	Observable_1.Observable.from = from_1.from;
	//# sourceMappingURL=from.js.map

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromObservable_1 = __webpack_require__(349);
	exports.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(41);
	var isFunction_1 = __webpack_require__(39);
	var isPromise_1 = __webpack_require__(337);
	var isScheduler_1 = __webpack_require__(350);
	var PromiseObservable_1 = __webpack_require__(52);
	var IteratorObservable_1 = __webpack_require__(351);
	var ArrayObservable_1 = __webpack_require__(352);
	var ArrayLikeObservable_1 = __webpack_require__(355);
	var iterator_1 = __webpack_require__(338);
	var Observable_1 = __webpack_require__(34);
	var observeOn_1 = __webpack_require__(356);
	var $$observable = __webpack_require__(48);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable from an Array, an array-like object, a Promise, an
	     * iterable object, or an Observable-like object.
	     *
	     * <span class="informal">Converts almost anything to an Observable.</span>
	     *
	     * <img src="./img/from.png" width="100%">
	     *
	     * Convert various other objects and data types into Observables. `from`
	     * converts a Promise or an array-like or an
	     * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
	     * object into an Observable that emits the items in that promise or array or
	     * iterable. A String, in this context, is treated as an array of characters.
	     * Observable-like objects (contains a function named with the ES2015 Symbol
	     * for Observable) can also be converted through this operator.
	     *
	     * @example <caption>Converts an array to an Observable</caption>
	     * var array = [10, 20, 30];
	     * var result = Rx.Observable.from(array);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
	     * function* generateDoubles(seed) {
	     *   var i = seed;
	     *   while (true) {
	     *     yield i;
	     *     i = 2 * i; // double it
	     *   }
	     * }
	     *
	     * var iterator = generateDoubles(3);
	     * var result = Rx.Observable.from(iterator).take(10);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link fromEvent}
	     * @see {@link fromEventPattern}
	     * @see {@link fromPromise}
	     *
	     * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
	     * Observable-like, an Array, an iterable or an array-like object to be
	     * converted.
	     * @param {function(x: any, i: number): T} [mapFn] A "map" function to call
	     * when converting array-like objects, where `x` is a value from the
	     * array-like and `i` is the index of that value in the sequence.
	     * @param {any} [thisArg] The context object to use when calling the `mapFn`,
	     * if provided.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * emissions of values.
	     * @return {Observable<T>} The Observable whose values are originally from the
	     * input object that was converted.
	     * @static true
	     * @name from
	     * @owner Observable
	     */
	    FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
	        var scheduler = null;
	        var mapFn = null;
	        if (isFunction_1.isFunction(mapFnOrScheduler)) {
	            scheduler = lastScheduler || null;
	            mapFn = mapFnOrScheduler;
	        }
	        else if (isScheduler_1.isScheduler(scheduler)) {
	            scheduler = mapFnOrScheduler;
	        }
	        if (ish != null) {
	            if (typeof ish[$$observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[$$observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 350 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(35);
	var isObject_1 = __webpack_require__(42);
	var tryCatch_1 = __webpack_require__(43);
	var Observable_1 = __webpack_require__(34);
	var isFunction_1 = __webpack_require__(39);
	var iterator_1 = __webpack_require__(338);
	var errorObject_1 = __webpack_require__(44);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (isObject_1.isObject(project)) {
	            this.thisArg = project;
	            this.scheduler = thisArg;
	        }
	        else if (isFunction_1.isFunction(project)) {
	            this.project = project;
	            this.thisArg = thisArg;
	            this.scheduler = scheduler;
	        }
	        else if (project != null) {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[iterator_1.$$iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[iterator_1.$$iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(34);
	var ScalarObservable_1 = __webpack_require__(353);
	var EmptyObservable_1 = __webpack_require__(354);
	var isScheduler_1 = __webpack_require__(350);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(34);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	        if (scheduler) {
	            this._isScalar = false;
	        }
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(34);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(34);
	var ScalarObservable_1 = __webpack_require__(353);
	var EmptyObservable_1 = __webpack_require__(354);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!mapFn && !scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	        if (mapFn) {
	            this.mapFn = mapFn.bind(thisArg);
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1 && !mapFn) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
	        subscriber.next(result);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
	                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
	                subscriber.next(result);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	var Notification_1 = __webpack_require__(357);
	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` exception.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var forkJoin_1 = __webpack_require__(359);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(360);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(34);
	var EmptyObservable_1 = __webpack_require__(354);
	var isArray_1 = __webpack_require__(41);
	var subscribeToResult_1 = __webpack_require__(336);
	var OuterSubscriber_1 = __webpack_require__(340);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(352);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var Observable_1 = __webpack_require__(34);
	var of_1 = __webpack_require__(361);
	var shared_1 = __webpack_require__(363);
	var url_tree_1 = __webpack_require__(364);
	var collection_1 = __webpack_require__(365);
	var NoMatch = (function () {
	    function NoMatch(segment) {
	        if (segment === void 0) { segment = null; }
	        this.segment = segment;
	    }
	    return NoMatch;
	}());
	var GlobalRedirect = (function () {
	    function GlobalRedirect(paths) {
	        this.paths = paths;
	    }
	    return GlobalRedirect;
	}());
	function applyRedirects(urlTree, config) {
	    try {
	        return createUrlTree(urlTree, expandSegment(config, urlTree.root, shared_1.PRIMARY_OUTLET));
	    }
	    catch (e) {
	        if (e instanceof GlobalRedirect) {
	            return createUrlTree(urlTree, new url_tree_1.UrlSegment([], (_a = {}, _a[shared_1.PRIMARY_OUTLET] = new url_tree_1.UrlSegment(e.paths, {}), _a)));
	        }
	        else if (e instanceof NoMatch) {
	            return new Observable_1.Observable(function (obs) {
	                return obs.error(new Error("Cannot match any routes: '" + e.segment + "'"));
	            });
	        }
	        else {
	            return new Observable_1.Observable(function (obs) { return obs.error(e); });
	        }
	    }
	    var _a;
	}
	exports.applyRedirects = applyRedirects;
	function createUrlTree(urlTree, rootCandidate) {
	    var root = rootCandidate.pathsWithParams.length > 0 ?
	        new url_tree_1.UrlSegment([], (_a = {}, _a[shared_1.PRIMARY_OUTLET] = rootCandidate, _a)) :
	        rootCandidate;
	    return of_1.of(new url_tree_1.UrlTree(root, urlTree.queryParams, urlTree.fragment));
	    var _a;
	}
	function expandSegment(routes, segment, outlet) {
	    if (segment.pathsWithParams.length === 0 && segment.hasChildren()) {
	        return new url_tree_1.UrlSegment([], expandSegmentChildren(routes, segment));
	    }
	    else {
	        return expandPathsWithParams(segment, routes, segment.pathsWithParams, outlet, true);
	    }
	}
	function expandSegmentChildren(routes, segment) {
	    return url_tree_1.mapChildren(segment, function (child, childOutlet) { return expandSegment(routes, child, childOutlet); });
	}
	function expandPathsWithParams(segment, routes, paths, outlet, allowRedirects) {
	    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	        var r = routes_1[_i];
	        try {
	            return expandPathsWithParamsAgainstRoute(segment, routes, r, paths, outlet, allowRedirects);
	        }
	        catch (e) {
	            if (!(e instanceof NoMatch))
	                throw e;
	        }
	    }
	    throw new NoMatch(segment);
	}
	function expandPathsWithParamsAgainstRoute(segment, routes, route, paths, outlet, allowRedirects) {
	    if (getOutlet(route) !== outlet)
	        throw new NoMatch();
	    if (route.redirectTo !== undefined && !allowRedirects)
	        throw new NoMatch();
	    if (route.redirectTo !== undefined) {
	        return expandPathsWithParamsAgainstRouteUsingRedirect(segment, routes, route, paths, outlet);
	    }
	    else {
	        return matchPathsWithParamsAgainstRoute(segment, route, paths);
	    }
	}
	function expandPathsWithParamsAgainstRouteUsingRedirect(segment, routes, route, paths, outlet) {
	    if (route.path === '**') {
	        return expandWildCardWithParamsAgainstRouteUsingRedirect(route);
	    }
	    else {
	        return expandRegularPathWithParamsAgainstRouteUsingRedirect(segment, routes, route, paths, outlet);
	    }
	}
	function expandWildCardWithParamsAgainstRouteUsingRedirect(route) {
	    var newPaths = applyRedirectCommands([], route.redirectTo, {});
	    if (route.redirectTo.startsWith('/')) {
	        throw new GlobalRedirect(newPaths);
	    }
	    else {
	        return new url_tree_1.UrlSegment(newPaths, {});
	    }
	}
	function expandRegularPathWithParamsAgainstRouteUsingRedirect(segment, routes, route, paths, outlet) {
	    var _a = match(segment, route, paths), consumedPaths = _a.consumedPaths, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
	    var newPaths = applyRedirectCommands(consumedPaths, route.redirectTo, positionalParamSegments);
	    if (route.redirectTo.startsWith('/')) {
	        throw new GlobalRedirect(newPaths);
	    }
	    else {
	        return expandPathsWithParams(segment, routes, newPaths.concat(paths.slice(lastChild)), outlet, false);
	    }
	}
	function matchPathsWithParamsAgainstRoute(rawSegment, route, paths) {
	    if (route.path === '**') {
	        return new url_tree_1.UrlSegment(paths, {});
	    }
	    else {
	        var _a = match(rawSegment, route, paths), consumedPaths = _a.consumedPaths, lastChild = _a.lastChild;
	        var childConfig = route.children ? route.children : [];
	        var rawSlicedPath = paths.slice(lastChild);
	        var _b = split(rawSegment, consumedPaths, rawSlicedPath, childConfig), segment = _b.segment, slicedPath = _b.slicedPath;
	        if (slicedPath.length === 0 && segment.hasChildren()) {
	            var children = expandSegmentChildren(childConfig, segment);
	            return new url_tree_1.UrlSegment(consumedPaths, children);
	        }
	        else if (childConfig.length === 0 && slicedPath.length === 0) {
	            return new url_tree_1.UrlSegment(consumedPaths, {});
	        }
	        else {
	            var cs = expandPathsWithParams(segment, childConfig, slicedPath, shared_1.PRIMARY_OUTLET, true);
	            return new url_tree_1.UrlSegment(consumedPaths.concat(cs.pathsWithParams), cs.children);
	        }
	    }
	}
	function match(segment, route, paths) {
	    if (route.path === '') {
	        if ((route.terminal || route.pathMatch === 'full') &&
	            (segment.hasChildren() || paths.length > 0)) {
	            throw new NoMatch();
	        }
	        else {
	            return { consumedPaths: [], lastChild: 0, positionalParamSegments: {} };
	        }
	    }
	    var path = route.path;
	    var parts = path.split('/');
	    var positionalParamSegments = {};
	    var consumedPaths = [];
	    var currentIndex = 0;
	    for (var i = 0; i < parts.length; ++i) {
	        if (currentIndex >= paths.length)
	            throw new NoMatch();
	        var current = paths[currentIndex];
	        var p = parts[i];
	        var isPosParam = p.startsWith(':');
	        if (!isPosParam && p !== current.path)
	            throw new NoMatch();
	        if (isPosParam) {
	            positionalParamSegments[p.substring(1)] = current;
	        }
	        consumedPaths.push(current);
	        currentIndex++;
	    }
	    if (route.terminal && (segment.hasChildren() || currentIndex < paths.length)) {
	        throw new NoMatch();
	    }
	    return { consumedPaths: consumedPaths, lastChild: currentIndex, positionalParamSegments: positionalParamSegments };
	}
	function applyRedirectCommands(paths, redirectTo, posParams) {
	    var r = redirectTo.startsWith('/') ? redirectTo.substring(1) : redirectTo;
	    if (r === '') {
	        return [];
	    }
	    else {
	        return createPaths(redirectTo, r.split('/'), paths, posParams);
	    }
	}
	function createPaths(redirectTo, parts, segments, posParams) {
	    return parts.map(function (p) { return p.startsWith(':') ? findPosParam(p, posParams, redirectTo) :
	        findOrCreatePath(p, segments); });
	}
	function findPosParam(part, posParams, redirectTo) {
	    var paramName = part.substring(1);
	    var pos = posParams[paramName];
	    if (!pos)
	        throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + part + "'.");
	    return pos;
	}
	function findOrCreatePath(part, paths) {
	    var idx = 0;
	    for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
	        var s = paths_1[_i];
	        if (s.path === part) {
	            paths.splice(idx);
	            return s;
	        }
	        idx++;
	    }
	    return new url_tree_1.UrlPathWithParams(part, {});
	}
	function split(segment, consumedPaths, slicedPath, config) {
	    if (slicedPath.length > 0 &&
	        containsEmptyPathRedirectsWithNamedOutlets(segment, slicedPath, config)) {
	        var s = new url_tree_1.UrlSegment(consumedPaths, createChildrenForEmptyPaths(config, new url_tree_1.UrlSegment(slicedPath, segment.children)));
	        return { segment: mergeTrivialChildren(s), slicedPath: [] };
	    }
	    else if (slicedPath.length === 0 && containsEmptyPathRedirects(segment, slicedPath, config)) {
	        var s = new url_tree_1.UrlSegment(segment.pathsWithParams, addEmptyPathsToChildrenIfNeeded(segment, slicedPath, config, segment.children));
	        return { segment: mergeTrivialChildren(s), slicedPath: slicedPath };
	    }
	    else {
	        return { segment: segment, slicedPath: slicedPath };
	    }
	}
	function mergeTrivialChildren(s) {
	    if (s.numberOfChildren === 1 && s.children[shared_1.PRIMARY_OUTLET]) {
	        var c = s.children[shared_1.PRIMARY_OUTLET];
	        return new url_tree_1.UrlSegment(s.pathsWithParams.concat(c.pathsWithParams), c.children);
	    }
	    else {
	        return s;
	    }
	}
	function addEmptyPathsToChildrenIfNeeded(segment, slicedPath, routes, children) {
	    var res = {};
	    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
	        var r = routes_2[_i];
	        if (emptyPathRedirect(segment, slicedPath, r) && !children[getOutlet(r)]) {
	            res[getOutlet(r)] = new url_tree_1.UrlSegment([], {});
	        }
	    }
	    return collection_1.merge(children, res);
	}
	function createChildrenForEmptyPaths(routes, primarySegment) {
	    var res = {};
	    res[shared_1.PRIMARY_OUTLET] = primarySegment;
	    for (var _i = 0, routes_3 = routes; _i < routes_3.length; _i++) {
	        var r = routes_3[_i];
	        if (r.path === '') {
	            res[getOutlet(r)] = new url_tree_1.UrlSegment([], {});
	        }
	    }
	    return res;
	}
	function containsEmptyPathRedirectsWithNamedOutlets(segment, slicedPath, routes) {
	    return routes
	        .filter(function (r) { return emptyPathRedirect(segment, slicedPath, r) && getOutlet(r) !== shared_1.PRIMARY_OUTLET; })
	        .length > 0;
	}
	function containsEmptyPathRedirects(segment, slicedPath, routes) {
	    return routes.filter(function (r) { return emptyPathRedirect(segment, slicedPath, r); }).length > 0;
	}
	function emptyPathRedirect(segment, slicedPath, r) {
	    if ((segment.hasChildren() || slicedPath.length > 0) && (r.terminal || r.pathMatch === 'full'))
	        return false;
	    return r.path === '' && r.redirectTo !== undefined;
	}
	function getOutlet(route) {
	    return route.outlet ? route.outlet : shared_1.PRIMARY_OUTLET;
	}
	//# sourceMappingURL=apply_redirects.js.map

/***/ },
/* 363 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	/**
	 * Name of the primary outlet.
	 * @type {string}
	 *
	 * @experimental
	 */
	exports.PRIMARY_OUTLET = 'PRIMARY_OUTLET';
	//# sourceMappingURL=shared.js.map

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var shared_1 = __webpack_require__(363);
	var collection_1 = __webpack_require__(365);
	function createEmptyUrlTree() {
	    return new UrlTree(new UrlSegment([], {}), {}, null);
	}
	exports.createEmptyUrlTree = createEmptyUrlTree;
	function containsTree(container, containee, exact) {
	    if (exact) {
	        return equalSegments(container.root, containee.root);
	    }
	    else {
	        return containsSegment(container.root, containee.root);
	    }
	}
	exports.containsTree = containsTree;
	function equalSegments(container, containee) {
	    if (!equalPath(container.pathsWithParams, containee.pathsWithParams))
	        return false;
	    if (container.numberOfChildren !== containee.numberOfChildren)
	        return false;
	    for (var c in containee.children) {
	        if (!container.children[c])
	            return false;
	        if (!equalSegments(container.children[c], containee.children[c]))
	            return false;
	    }
	    return true;
	}
	function containsSegment(container, containee) {
	    return containsSegmentHelper(container, containee, containee.pathsWithParams);
	}
	function containsSegmentHelper(container, containee, containeePaths) {
	    if (container.pathsWithParams.length > containeePaths.length) {
	        var current = container.pathsWithParams.slice(0, containeePaths.length);
	        if (!equalPath(current, containeePaths))
	            return false;
	        if (containee.hasChildren())
	            return false;
	        return true;
	    }
	    else if (container.pathsWithParams.length === containeePaths.length) {
	        if (!equalPath(container.pathsWithParams, containeePaths))
	            return false;
	        for (var c in containee.children) {
	            if (!container.children[c])
	                return false;
	            if (!containsSegment(container.children[c], containee.children[c]))
	                return false;
	        }
	        return true;
	    }
	    else {
	        var current = containeePaths.slice(0, container.pathsWithParams.length);
	        var next = containeePaths.slice(container.pathsWithParams.length);
	        if (!equalPath(container.pathsWithParams, current))
	            return false;
	        if (!container.children[shared_1.PRIMARY_OUTLET])
	            return false;
	        return containsSegmentHelper(container.children[shared_1.PRIMARY_OUTLET], containee, next);
	    }
	}
	/**
	 * A URL in the tree form.
	 *
	 * @stable
	 */
	var UrlTree = (function () {
	    /**
	     * @internal
	     */
	    function UrlTree(root, queryParams, fragment) {
	        this.root = root;
	        this.queryParams = queryParams;
	        this.fragment = fragment;
	    }
	    UrlTree.prototype.toString = function () { return new DefaultUrlSerializer().serialize(this); };
	    return UrlTree;
	}());
	exports.UrlTree = UrlTree;
	/**
	 * @stable
	 */
	var UrlSegment = (function () {
	    function UrlSegment(pathsWithParams, children) {
	        var _this = this;
	        this.pathsWithParams = pathsWithParams;
	        this.children = children;
	        this.parent = null;
	        collection_1.forEach(children, function (v, k) { return v.parent = _this; });
	    }
	    /**
	     * Return true if the segment has child segments
	     */
	    UrlSegment.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
	    Object.defineProperty(UrlSegment.prototype, "numberOfChildren", {
	        /**
	         * Returns the number of child sements.
	         */
	        get: function () { return Object.keys(this.children).length; },
	        enumerable: true,
	        configurable: true
	    });
	    UrlSegment.prototype.toString = function () { return serializePaths(this); };
	    return UrlSegment;
	}());
	exports.UrlSegment = UrlSegment;
	/**
	 * @stable
	 */
	var UrlPathWithParams = (function () {
	    function UrlPathWithParams(path, parameters) {
	        this.path = path;
	        this.parameters = parameters;
	    }
	    UrlPathWithParams.prototype.toString = function () { return serializePath(this); };
	    return UrlPathWithParams;
	}());
	exports.UrlPathWithParams = UrlPathWithParams;
	function equalPathsWithParams(a, b) {
	    if (a.length !== b.length)
	        return false;
	    for (var i = 0; i < a.length; ++i) {
	        if (a[i].path !== b[i].path)
	            return false;
	        if (!collection_1.shallowEqual(a[i].parameters, b[i].parameters))
	            return false;
	    }
	    return true;
	}
	exports.equalPathsWithParams = equalPathsWithParams;
	function equalPath(a, b) {
	    if (a.length !== b.length)
	        return false;
	    for (var i = 0; i < a.length; ++i) {
	        if (a[i].path !== b[i].path)
	            return false;
	    }
	    return true;
	}
	exports.equalPath = equalPath;
	function mapChildren(segment, fn) {
	    var newChildren = {};
	    collection_1.forEach(segment.children, function (child, childOutlet) {
	        if (childOutlet === shared_1.PRIMARY_OUTLET) {
	            newChildren[childOutlet] = fn(child, childOutlet);
	        }
	    });
	    collection_1.forEach(segment.children, function (child, childOutlet) {
	        if (childOutlet !== shared_1.PRIMARY_OUTLET) {
	            newChildren[childOutlet] = fn(child, childOutlet);
	        }
	    });
	    return newChildren;
	}
	exports.mapChildren = mapChildren;
	function mapChildrenIntoArray(segment, fn) {
	    var res = [];
	    collection_1.forEach(segment.children, function (child, childOutlet) {
	        if (childOutlet === shared_1.PRIMARY_OUTLET) {
	            res = res.concat(fn(child, childOutlet));
	        }
	    });
	    collection_1.forEach(segment.children, function (child, childOutlet) {
	        if (childOutlet !== shared_1.PRIMARY_OUTLET) {
	            res = res.concat(fn(child, childOutlet));
	        }
	    });
	    return res;
	}
	exports.mapChildrenIntoArray = mapChildrenIntoArray;
	/**
	 * Defines a way to serialize/deserialize a url tree.
	 *
	 * @experimental
	 */
	var UrlSerializer = (function () {
	    function UrlSerializer() {
	    }
	    return UrlSerializer;
	}());
	exports.UrlSerializer = UrlSerializer;
	/**
	 * A default implementation of the serialization.
	 *
	 * @experimental
	 */
	var DefaultUrlSerializer = (function () {
	    function DefaultUrlSerializer() {
	    }
	    DefaultUrlSerializer.prototype.parse = function (url) {
	        var p = new UrlParser(url);
	        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
	    };
	    DefaultUrlSerializer.prototype.serialize = function (tree) {
	        var segment = "/" + serializeSegment(tree.root, true);
	        var query = serializeQueryParams(tree.queryParams);
	        var fragment = tree.fragment !== null ? "#" + tree.fragment : '';
	        return "" + segment + query + fragment;
	    };
	    return DefaultUrlSerializer;
	}());
	exports.DefaultUrlSerializer = DefaultUrlSerializer;
	function serializePaths(segment) {
	    return segment.pathsWithParams.map(function (p) { return serializePath(p); }).join('/');
	}
	exports.serializePaths = serializePaths;
	function serializeSegment(segment, root) {
	    if (segment.children[shared_1.PRIMARY_OUTLET] && root) {
	        var primary = serializeSegment(segment.children[shared_1.PRIMARY_OUTLET], false);
	        var children_1 = [];
	        collection_1.forEach(segment.children, function (v, k) {
	            if (k !== shared_1.PRIMARY_OUTLET) {
	                children_1.push(k + ":" + serializeSegment(v, false));
	            }
	        });
	        if (children_1.length > 0) {
	            return primary + "(" + children_1.join('//') + ")";
	        }
	        else {
	            return "" + primary;
	        }
	    }
	    else if (segment.hasChildren() && !root) {
	        var children = mapChildrenIntoArray(segment, function (v, k) {
	            if (k === shared_1.PRIMARY_OUTLET) {
	                return [serializeSegment(segment.children[shared_1.PRIMARY_OUTLET], false)];
	            }
	            else {
	                return [(k + ":" + serializeSegment(v, false))];
	            }
	        });
	        return serializePaths(segment) + "/(" + children.join('//') + ")";
	    }
	    else {
	        return serializePaths(segment);
	    }
	}
	function serializePath(path) {
	    return "" + path.path + serializeParams(path.parameters);
	}
	exports.serializePath = serializePath;
	function serializeParams(params) {
	    return pairs(params).map(function (p) { return (";" + p.first + "=" + p.second); }).join('');
	}
	function serializeQueryParams(params) {
	    var strs = pairs(params).map(function (p) { return (p.first + "=" + p.second); });
	    return strs.length > 0 ? "?" + strs.join("&") : '';
	}
	var Pair = (function () {
	    function Pair(first, second) {
	        this.first = first;
	        this.second = second;
	    }
	    return Pair;
	}());
	function pairs(obj) {
	    var res = [];
	    for (var prop in obj) {
	        if (obj.hasOwnProperty(prop)) {
	            res.push(new Pair(prop, obj[prop]));
	        }
	    }
	    return res;
	}
	var SEGMENT_RE = /^[^\/\(\)\?;=&#]+/;
	function matchPathWithParams(str) {
	    SEGMENT_RE.lastIndex = 0;
	    var match = SEGMENT_RE.exec(str);
	    return match ? match[0] : '';
	}
	var QUERY_PARAM_RE = /^[^=\?&#]+/;
	function matchQueryParams(str) {
	    QUERY_PARAM_RE.lastIndex = 0;
	    var match = SEGMENT_RE.exec(str);
	    return match ? match[0] : '';
	}
	var QUERY_PARAM_VALUE_RE = /^[^\?&#]+/;
	function matchUrlQueryParamValue(str) {
	    QUERY_PARAM_VALUE_RE.lastIndex = 0;
	    var match = QUERY_PARAM_VALUE_RE.exec(str);
	    return match ? match[0] : '';
	}
	var UrlParser = (function () {
	    function UrlParser(remaining) {
	        this.remaining = remaining;
	    }
	    UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
	    UrlParser.prototype.capture = function (str) {
	        if (!this.remaining.startsWith(str)) {
	            throw new Error("Expected \"" + str + "\".");
	        }
	        this.remaining = this.remaining.substring(str.length);
	    };
	    UrlParser.prototype.parseRootSegment = function () {
	        if (this.remaining.startsWith('/')) {
	            this.capture('/');
	        }
	        if (this.remaining === '' || this.remaining.startsWith('?')) {
	            return new UrlSegment([], {});
	        }
	        else {
	            return new UrlSegment([], this.parseSegmentChildren());
	        }
	    };
	    UrlParser.prototype.parseSegmentChildren = function () {
	        if (this.remaining.length == 0) {
	            return {};
	        }
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var paths = [this.parsePathWithParams()];
	        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
	            this.capture('/');
	            paths.push(this.parsePathWithParams());
	        }
	        var children = {};
	        if (this.peekStartsWith('/(')) {
	            this.capture('/');
	            children = this.parseParens(true);
	        }
	        var res = {};
	        if (this.peekStartsWith('(')) {
	            res = this.parseParens(false);
	        }
	        res[shared_1.PRIMARY_OUTLET] = new UrlSegment(paths, children);
	        return res;
	    };
	    UrlParser.prototype.parsePathWithParams = function () {
	        var path = matchPathWithParams(this.remaining);
	        if (path === '' && this.peekStartsWith(';')) {
	            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
	        }
	        this.capture(path);
	        var matrixParams = {};
	        if (this.peekStartsWith(';')) {
	            matrixParams = this.parseMatrixParams();
	        }
	        return new UrlPathWithParams(path, matrixParams);
	    };
	    UrlParser.prototype.parseQueryParams = function () {
	        var params = {};
	        if (this.peekStartsWith('?')) {
	            this.capture('?');
	            this.parseQueryParam(params);
	            while (this.remaining.length > 0 && this.peekStartsWith('&')) {
	                this.capture('&');
	                this.parseQueryParam(params);
	            }
	        }
	        return params;
	    };
	    UrlParser.prototype.parseFragment = function () {
	        if (this.peekStartsWith('#')) {
	            return this.remaining.substring(1);
	        }
	        else {
	            return null;
	        }
	    };
	    UrlParser.prototype.parseMatrixParams = function () {
	        var params = {};
	        while (this.remaining.length > 0 && this.peekStartsWith(';')) {
	            this.capture(';');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseParam = function (params) {
	        var key = matchPathWithParams(this.remaining);
	        if (!key) {
	            return;
	        }
	        this.capture(key);
	        var value = 'true';
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchPathWithParams(this.remaining);
	            if (valueMatch) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseQueryParam = function (params) {
	        var key = matchQueryParams(this.remaining);
	        if (!key) {
	            return;
	        }
	        this.capture(key);
	        var value = 'true';
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlQueryParamValue(this.remaining);
	            if (valueMatch) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseParens = function (allowPrimary) {
	        var segments = {};
	        this.capture('(');
	        while (!this.peekStartsWith(')') && this.remaining.length > 0) {
	            var path = matchPathWithParams(this.remaining);
	            var outletName = void 0;
	            if (path.indexOf(':') > -1) {
	                outletName = path.substr(0, path.indexOf(':'));
	                this.capture(outletName);
	                this.capture(':');
	            }
	            else if (allowPrimary) {
	                outletName = shared_1.PRIMARY_OUTLET;
	            }
	            var children = this.parseSegmentChildren();
	            segments[outletName] = Object.keys(children).length === 1 ? children[shared_1.PRIMARY_OUTLET] :
	                new UrlSegment([], children);
	            if (this.peekStartsWith('//')) {
	                this.capture('//');
	            }
	        }
	        this.capture(')');
	        return segments;
	    };
	    return UrlParser;
	}());
	//# sourceMappingURL=url_tree.js.map

/***/ },
/* 365 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function shallowEqualArrays(a, b) {
	    if (a.length !== b.length)
	        return false;
	    for (var i = 0; i < a.length; ++i) {
	        if (!shallowEqual(a[i], b[i]))
	            return false;
	    }
	    return true;
	}
	exports.shallowEqualArrays = shallowEqualArrays;
	function shallowEqual(a, b) {
	    var k1 = Object.keys(a);
	    var k2 = Object.keys(b);
	    if (k1.length != k2.length) {
	        return false;
	    }
	    var key;
	    for (var i = 0; i < k1.length; i++) {
	        key = k1[i];
	        if (a[key] !== b[key]) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.shallowEqual = shallowEqual;
	function flatten(a) {
	    var target = [];
	    for (var i = 0; i < a.length; ++i) {
	        for (var j = 0; j < a[i].length; ++j) {
	            target.push(a[i][j]);
	        }
	    }
	    return target;
	}
	exports.flatten = flatten;
	function first(a) {
	    return a.length > 0 ? a[0] : null;
	}
	exports.first = first;
	function last(a) {
	    return a.length > 0 ? a[a.length - 1] : null;
	}
	exports.last = last;
	function and(bools) {
	    return bools.reduce(function (a, b) { return a && b; }, true);
	}
	exports.and = and;
	function merge(m1, m2) {
	    var m = {};
	    for (var attr in m1) {
	        if (m1.hasOwnProperty(attr)) {
	            m[attr] = m1[attr];
	        }
	    }
	    for (var attr in m2) {
	        if (m2.hasOwnProperty(attr)) {
	            m[attr] = m2[attr];
	        }
	    }
	    return m;
	}
	exports.merge = merge;
	function forEach(map, callback) {
	    for (var prop in map) {
	        if (map.hasOwnProperty(prop)) {
	            callback(map[prop], prop);
	        }
	    }
	}
	exports.forEach = forEach;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 366 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function validateConfig(config) {
	    config.forEach(validateNode);
	}
	exports.validateConfig = validateConfig;
	function validateNode(route) {
	    if (!!route.redirectTo && !!route.children) {
	        throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and children cannot be used together");
	    }
	    if (!!route.redirectTo && !!route.component) {
	        throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and component cannot be used together");
	    }
	    if (route.redirectTo === undefined && !route.component && !route.children) {
	        throw new Error("Invalid configuration of route '" + route.path + "': component, redirectTo, children must be provided");
	    }
	    if (route.path === undefined) {
	        throw new Error("Invalid route configuration: routes must have path specified");
	    }
	    if (route.path.startsWith('/')) {
	        throw new Error("Invalid route configuration of route '" + route.path + "': path cannot start with a slash");
	    }
	    if (route.path === '' && route.redirectTo !== undefined &&
	        (route.terminal === undefined && route.pathMatch === undefined)) {
	        var exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
	        throw new Error("Invalid route configuration of route '{path: \"" + route.path + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
	    }
	}
	//# sourceMappingURL=config.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var BehaviorSubject_1 = __webpack_require__(368);
	var router_state_1 = __webpack_require__(370);
	var tree_1 = __webpack_require__(371);
	function createRouterState(curr, prevState) {
	    var root = createNode(curr._root, prevState ? prevState._root : undefined);
	    var queryParams = prevState ? prevState.queryParams : new BehaviorSubject_1.BehaviorSubject(curr.queryParams);
	    var fragment = prevState ? prevState.fragment : new BehaviorSubject_1.BehaviorSubject(curr.fragment);
	    return new router_state_1.RouterState(root, queryParams, fragment, curr);
	}
	exports.createRouterState = createRouterState;
	function createNode(curr, prevState) {
	    if (prevState && equalRouteSnapshots(prevState.value.snapshot, curr.value)) {
	        var value = prevState.value;
	        value._futureSnapshot = curr.value;
	        var children = createOrReuseChildren(curr, prevState);
	        return new tree_1.TreeNode(value, children);
	    }
	    else {
	        var value = createActivatedRoute(curr.value);
	        var children = curr.children.map(function (c) { return createNode(c); });
	        return new tree_1.TreeNode(value, children);
	    }
	}
	function createOrReuseChildren(curr, prevState) {
	    return curr.children.map(function (child) {
	        for (var _i = 0, _a = prevState.children; _i < _a.length; _i++) {
	            var p = _a[_i];
	            if (equalRouteSnapshots(p.value.snapshot, child.value)) {
	                return createNode(child, p);
	            }
	        }
	        return createNode(child);
	    });
	}
	function createActivatedRoute(c) {
	    return new router_state_1.ActivatedRoute(new BehaviorSubject_1.BehaviorSubject(c.url), new BehaviorSubject_1.BehaviorSubject(c.params), new BehaviorSubject_1.BehaviorSubject(c.data), c.outlet, c.component, c);
	}
	function equalRouteSnapshots(a, b) {
	    return a._routeConfig === b._routeConfig;
	}
	//# sourceMappingURL=create_router_state.js.map

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(33);
	var throwError_1 = __webpack_require__(369);
	var ObjectUnsubscribedError_1 = __webpack_require__(50);
	/**
	 * @class BehaviorSubject<T>
	 */
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasError) {
	            throwError_1.throwError(this.thrownError);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype.next = function (value) {
	        _super.prototype.next.call(this, this._value = value);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 369 */
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BehaviorSubject_1 = __webpack_require__(368);
	var shared_1 = __webpack_require__(363);
	var url_tree_1 = __webpack_require__(364);
	var collection_1 = __webpack_require__(365);
	var tree_1 = __webpack_require__(371);
	/**
	 * The state of the router.
	 *
	 * ### Usage
	 *
	 * ```
	 * class MyComponent {
	 *   constructor(router: Router) {
	 *     const state = router.routerState;
	 *     const id: Observable<string> = state.firstChild(state.root).params.map(p => p.id);
	 *     const isDebug: Observable<string> = state.queryParams.map(q => q.debug);
	 *   }
	 * }
	 * ```
	 *
	 * @stable
	 */
	var RouterState = (function (_super) {
	    __extends(RouterState, _super);
	    /**
	     * @internal
	     */
	    function RouterState(root, queryParams, fragment, snapshot) {
	        _super.call(this, root);
	        this.queryParams = queryParams;
	        this.fragment = fragment;
	        this.snapshot = snapshot;
	    }
	    RouterState.prototype.toString = function () { return this.snapshot.toString(); };
	    return RouterState;
	}(tree_1.Tree));
	exports.RouterState = RouterState;
	function createEmptyState(urlTree, rootComponent) {
	    var snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
	    var emptyUrl = new BehaviorSubject_1.BehaviorSubject([new url_tree_1.UrlPathWithParams('', {})]);
	    var emptyParams = new BehaviorSubject_1.BehaviorSubject({});
	    var emptyData = new BehaviorSubject_1.BehaviorSubject({});
	    var emptyQueryParams = new BehaviorSubject_1.BehaviorSubject({});
	    var fragment = new BehaviorSubject_1.BehaviorSubject('');
	    var activated = new ActivatedRoute(emptyUrl, emptyParams, emptyData, shared_1.PRIMARY_OUTLET, rootComponent, snapshot.root);
	    activated.snapshot = snapshot.root;
	    return new RouterState(new tree_1.TreeNode(activated, []), emptyQueryParams, fragment, snapshot);
	}
	exports.createEmptyState = createEmptyState;
	function createEmptyStateSnapshot(urlTree, rootComponent) {
	    var emptyParams = {};
	    var emptyData = {};
	    var emptyQueryParams = {};
	    var fragment = '';
	    var activated = new ActivatedRouteSnapshot([], emptyParams, emptyData, shared_1.PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, InheritedResolve.empty);
	    return new RouterStateSnapshot('', new tree_1.TreeNode(activated, []), emptyQueryParams, fragment);
	}
	/**
	 * Contains the information about a component loaded in an outlet. The information is provided
	 * through the params, urlSegments, and data observables.
	 *
	 * ### Usage
	 *
	 * ```
	 * class MyComponent {
	 *   constructor(route: ActivatedRoute) {
	 *     const id: Observable<string> = route.params.map(p => p.id);
	 *     const data = route.data.map(d => d.user); //includes `data` and `resolve`
	 *   }
	 * }
	 * ```
	 *
	 * @stable
	 */
	var ActivatedRoute = (function () {
	    /**
	     * @internal
	     */
	    function ActivatedRoute(url, params, data, outlet, component, futureSnapshot) {
	        this.url = url;
	        this.params = params;
	        this.data = data;
	        this.outlet = outlet;
	        this.component = component;
	        this._futureSnapshot = futureSnapshot;
	    }
	    ActivatedRoute.prototype.toString = function () {
	        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
	    };
	    return ActivatedRoute;
	}());
	exports.ActivatedRoute = ActivatedRoute;
	/**
	 * @internal
	 */
	var InheritedResolve = (function () {
	    function InheritedResolve(parent, current) {
	        this.parent = parent;
	        this.current = current;
	        /**
	         * @internal
	         */
	        this.resolvedData = {};
	    }
	    Object.defineProperty(InheritedResolve.prototype, "flattenedResolvedData", {
	        /**
	         * @internal
	         */
	        get: function () {
	            return this.parent ? collection_1.merge(this.parent.flattenedResolvedData, this.resolvedData) :
	                this.resolvedData;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InheritedResolve, "empty", {
	        get: function () { return new InheritedResolve(null, {}); },
	        enumerable: true,
	        configurable: true
	    });
	    return InheritedResolve;
	}());
	exports.InheritedResolve = InheritedResolve;
	/**
	 * Contains the information about a component loaded in an outlet at a particular moment in time.
	 *
	 * ### Usage
	 *
	 * ```
	 * class MyComponent {
	 *   constructor(route: ActivatedRoute) {
	 *     const id: string = route.snapshot.params.id;
	 *     const data = route.snapshot.data;
	 *   }
	 * }
	 * ```
	 *
	 * @stable
	 */
	var ActivatedRouteSnapshot = (function () {
	    /**
	     * @internal
	     */
	    function ActivatedRouteSnapshot(url, params, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
	        this.url = url;
	        this.params = params;
	        this.data = data;
	        this.outlet = outlet;
	        this.component = component;
	        this._routeConfig = routeConfig;
	        this._urlSegment = urlSegment;
	        this._lastPathIndex = lastPathIndex;
	        this._resolve = resolve;
	    }
	    ActivatedRouteSnapshot.prototype.toString = function () {
	        var url = this.url.map(function (s) { return s.toString(); }).join('/');
	        var matched = this._routeConfig ? this._routeConfig.path : '';
	        return "Route(url:'" + url + "', path:'" + matched + "')";
	    };
	    return ActivatedRouteSnapshot;
	}());
	exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
	/**
	 * The state of the router at a particular moment in time.
	 *
	 * ### Usage
	 *
	 * ```
	 * class MyComponent {
	 *   constructor(router: Router) {
	 *     const snapshot = router.routerState.snapshot;
	 *   }
	 * }
	 * ```
	 *
	 * @stable
	 */
	var RouterStateSnapshot = (function (_super) {
	    __extends(RouterStateSnapshot, _super);
	    /**
	     * @internal
	     */
	    function RouterStateSnapshot(url, root, queryParams, fragment) {
	        _super.call(this, root);
	        this.url = url;
	        this.queryParams = queryParams;
	        this.fragment = fragment;
	    }
	    RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
	    return RouterStateSnapshot;
	}(tree_1.Tree));
	exports.RouterStateSnapshot = RouterStateSnapshot;
	function serializeNode(node) {
	    var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : '';
	    return "" + node.value + c;
	}
	/**
	 * The expectation is that the activate route is created with the right set of parameters.
	 * So we push new values into the observables only when they are not the initial values.
	 * And we detect that by checking if the snapshot field is set.
	 */
	function advanceActivatedRoute(route) {
	    if (route.snapshot) {
	        if (!collection_1.shallowEqual(route.snapshot.params, route._futureSnapshot.params)) {
	            route.params.next(route._futureSnapshot.params);
	            route.data.next(route._futureSnapshot.data);
	        }
	        if (!collection_1.shallowEqualArrays(route.snapshot.url, route._futureSnapshot.url)) {
	            route.url.next(route._futureSnapshot.url);
	        }
	        route.snapshot = route._futureSnapshot;
	    }
	    else {
	        route.snapshot = route._futureSnapshot;
	        route.data.next(route._futureSnapshot.data);
	    }
	}
	exports.advanceActivatedRoute = advanceActivatedRoute;
	//# sourceMappingURL=router_state.js.map

/***/ },
/* 371 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var Tree = (function () {
	    function Tree(root) {
	        this._root = root;
	    }
	    Object.defineProperty(Tree.prototype, "root", {
	        get: function () { return this._root.value; },
	        enumerable: true,
	        configurable: true
	    });
	    Tree.prototype.parent = function (t) {
	        var p = this.pathFromRoot(t);
	        return p.length > 1 ? p[p.length - 2] : null;
	    };
	    Tree.prototype.children = function (t) {
	        var n = findNode(t, this._root);
	        return n ? n.children.map(function (t) { return t.value; }) : [];
	    };
	    Tree.prototype.firstChild = function (t) {
	        var n = findNode(t, this._root);
	        return n && n.children.length > 0 ? n.children[0].value : null;
	    };
	    Tree.prototype.siblings = function (t) {
	        var p = findPath(t, this._root, []);
	        if (p.length < 2)
	            return [];
	        var c = p[p.length - 2].children.map(function (c) { return c.value; });
	        return c.filter(function (cc) { return cc !== t; });
	    };
	    Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root, []).map(function (s) { return s.value; }); };
	    Tree.prototype.contains = function (tree) { return contains(this._root, tree._root); };
	    return Tree;
	}());
	exports.Tree = Tree;
	function findNode(expected, c) {
	    if (expected === c.value)
	        return c;
	    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	        var cc = _a[_i];
	        var r = findNode(expected, cc);
	        if (r)
	            return r;
	    }
	    return null;
	}
	function findPath(expected, c, collected) {
	    collected.push(c);
	    if (expected === c.value)
	        return collected;
	    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	        var cc = _a[_i];
	        var cloned = collected.slice(0);
	        var r = findPath(expected, cc, cloned);
	        if (r)
	            return r;
	    }
	    return [];
	}
	function contains(tree, subtree) {
	    if (tree.value !== subtree.value)
	        return false;
	    var _loop_1 = function(subtreeNode) {
	        var s = tree.children.filter(function (child) { return child.value === subtreeNode.value; });
	        if (s.length === 0)
	            return { value: false };
	        if (!contains(s[0], subtreeNode))
	            return { value: false };
	    };
	    for (var _i = 0, _a = subtree.children; _i < _a.length; _i++) {
	        var subtreeNode = _a[_i];
	        var state_1 = _loop_1(subtreeNode);
	        if (typeof state_1 === "object") return state_1.value;
	    }
	    return true;
	}
	var TreeNode = (function () {
	    function TreeNode(value, children) {
	        this.value = value;
	        this.children = children;
	    }
	    TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
	    return TreeNode;
	}());
	exports.TreeNode = TreeNode;
	//# sourceMappingURL=tree.js.map

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var shared_1 = __webpack_require__(363);
	var url_tree_1 = __webpack_require__(364);
	var collection_1 = __webpack_require__(365);
	function createUrlTree(route, urlTree, commands, queryParams, fragment) {
	    if (commands.length === 0) {
	        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
	    }
	    var normalizedCommands = normalizeCommands(commands);
	    if (navigateToRoot(normalizedCommands)) {
	        return tree(urlTree.root, new url_tree_1.UrlSegment([], {}), urlTree, queryParams, fragment);
	    }
	    var startingPosition = findStartingPosition(normalizedCommands, urlTree, route);
	    var segment = startingPosition.processChildren ?
	        updateSegmentChildren(startingPosition.segment, startingPosition.index, normalizedCommands.commands) :
	        updateSegment(startingPosition.segment, startingPosition.index, normalizedCommands.commands);
	    return tree(startingPosition.segment, segment, urlTree, queryParams, fragment);
	}
	exports.createUrlTree = createUrlTree;
	function tree(oldSegment, newSegment, urlTree, queryParams, fragment) {
	    var q = queryParams ? stringify(queryParams) : urlTree.queryParams;
	    var f = fragment ? fragment : urlTree.fragment;
	    if (urlTree.root === oldSegment) {
	        return new url_tree_1.UrlTree(newSegment, q, f);
	    }
	    else {
	        return new url_tree_1.UrlTree(replaceSegment(urlTree.root, oldSegment, newSegment), q, f);
	    }
	}
	function replaceSegment(current, oldSegment, newSegment) {
	    var children = {};
	    collection_1.forEach(current.children, function (c, outletName) {
	        if (c === oldSegment) {
	            children[outletName] = newSegment;
	        }
	        else {
	            children[outletName] = replaceSegment(c, oldSegment, newSegment);
	        }
	    });
	    return new url_tree_1.UrlSegment(current.pathsWithParams, children);
	}
	function navigateToRoot(normalizedChange) {
	    return normalizedChange.isAbsolute && normalizedChange.commands.length === 1 &&
	        normalizedChange.commands[0] == '/';
	}
	var NormalizedNavigationCommands = (function () {
	    function NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, commands) {
	        this.isAbsolute = isAbsolute;
	        this.numberOfDoubleDots = numberOfDoubleDots;
	        this.commands = commands;
	    }
	    return NormalizedNavigationCommands;
	}());
	function normalizeCommands(commands) {
	    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] == '/') {
	        return new NormalizedNavigationCommands(true, 0, commands);
	    }
	    var numberOfDoubleDots = 0;
	    var isAbsolute = false;
	    var res = [];
	    for (var i = 0; i < commands.length; ++i) {
	        var c = commands[i];
	        if (!(typeof c === 'string')) {
	            res.push(c);
	            continue;
	        }
	        var parts = c.split('/');
	        for (var j = 0; j < parts.length; ++j) {
	            var cc = parts[j];
	            // first exp is treated in a special way
	            if (i == 0) {
	                if (j == 0 && cc == '.') {
	                }
	                else if (j == 0 && cc == '') {
	                    isAbsolute = true;
	                }
	                else if (cc == '..') {
	                    numberOfDoubleDots++;
	                }
	                else if (cc != '') {
	                    res.push(cc);
	                }
	            }
	            else {
	                if (cc != '') {
	                    res.push(cc);
	                }
	            }
	        }
	    }
	    return new NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, res);
	}
	var Position = (function () {
	    function Position(segment, processChildren, index) {
	        this.segment = segment;
	        this.processChildren = processChildren;
	        this.index = index;
	    }
	    return Position;
	}());
	function findStartingPosition(normalizedChange, urlTree, route) {
	    if (normalizedChange.isAbsolute) {
	        return new Position(urlTree.root, true, 0);
	    }
	    else if (route.snapshot._lastPathIndex === -1) {
	        return new Position(route.snapshot._urlSegment, true, 0);
	    }
	    else if (route.snapshot._lastPathIndex + 1 - normalizedChange.numberOfDoubleDots >= 0) {
	        return new Position(route.snapshot._urlSegment, false, route.snapshot._lastPathIndex + 1 - normalizedChange.numberOfDoubleDots);
	    }
	    else {
	        throw new Error('Invalid number of \'../\'');
	    }
	}
	function getPath(command) {
	    if (!(typeof command === 'string'))
	        return command.toString();
	    var parts = command.toString().split(':');
	    return parts.length > 1 ? parts[1] : command;
	}
	function getOutlet(commands) {
	    if (!(typeof commands[0] === 'string'))
	        return shared_1.PRIMARY_OUTLET;
	    var parts = commands[0].toString().split(':');
	    return parts.length > 1 ? parts[0] : shared_1.PRIMARY_OUTLET;
	}
	function updateSegment(segment, startIndex, commands) {
	    if (!segment) {
	        segment = new url_tree_1.UrlSegment([], {});
	    }
	    if (segment.pathsWithParams.length === 0 && segment.hasChildren()) {
	        return updateSegmentChildren(segment, startIndex, commands);
	    }
	    var m = prefixedWith(segment, startIndex, commands);
	    var slicedCommands = commands.slice(m.lastIndex);
	    if (m.match && slicedCommands.length === 0) {
	        return new url_tree_1.UrlSegment(segment.pathsWithParams, {});
	    }
	    else if (m.match && !segment.hasChildren()) {
	        return createNewSegment(segment, startIndex, commands);
	    }
	    else if (m.match) {
	        return updateSegmentChildren(segment, 0, slicedCommands);
	    }
	    else {
	        return createNewSegment(segment, startIndex, commands);
	    }
	}
	function updateSegmentChildren(segment, startIndex, commands) {
	    if (commands.length === 0) {
	        return new url_tree_1.UrlSegment(segment.pathsWithParams, {});
	    }
	    else {
	        var outlet_1 = getOutlet(commands);
	        var children_1 = {};
	        children_1[outlet_1] = updateSegment(segment.children[outlet_1], startIndex, commands);
	        collection_1.forEach(segment.children, function (child, childOutlet) {
	            if (childOutlet !== outlet_1) {
	                children_1[childOutlet] = child;
	            }
	        });
	        return new url_tree_1.UrlSegment(segment.pathsWithParams, children_1);
	    }
	}
	function prefixedWith(segment, startIndex, commands) {
	    var currentCommandIndex = 0;
	    var currentPathIndex = startIndex;
	    var noMatch = { match: false, lastIndex: 0 };
	    while (currentPathIndex < segment.pathsWithParams.length) {
	        if (currentCommandIndex >= commands.length)
	            return noMatch;
	        var path = segment.pathsWithParams[currentPathIndex];
	        var curr = getPath(commands[currentCommandIndex]);
	        var next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
	        if (curr && next && (typeof next === 'object')) {
	            if (!compare(curr, next, path))
	                return noMatch;
	            currentCommandIndex += 2;
	        }
	        else {
	            if (!compare(curr, {}, path))
	                return noMatch;
	            currentCommandIndex++;
	        }
	        currentPathIndex++;
	    }
	    return { match: true, lastIndex: currentCommandIndex };
	}
	function createNewSegment(segment, startIndex, commands) {
	    var paths = segment.pathsWithParams.slice(0, startIndex);
	    var i = 0;
	    while (i < commands.length) {
	        // if we start with an object literal, we need to reuse the path part from the segment
	        if (i === 0 && (typeof commands[0] === 'object')) {
	            var p = segment.pathsWithParams[startIndex];
	            paths.push(new url_tree_1.UrlPathWithParams(p.path, commands[0]));
	            i++;
	            continue;
	        }
	        var curr = getPath(commands[i]);
	        var next = (i < commands.length - 1) ? commands[i + 1] : null;
	        if (curr && next && (typeof next === 'object')) {
	            paths.push(new url_tree_1.UrlPathWithParams(curr, stringify(next)));
	            i += 2;
	        }
	        else {
	            paths.push(new url_tree_1.UrlPathWithParams(curr, {}));
	            i++;
	        }
	    }
	    return new url_tree_1.UrlSegment(paths, {});
	}
	function stringify(params) {
	    var res = {};
	    collection_1.forEach(params, function (v, k) { return res[k] = "" + v; });
	    return res;
	}
	function compare(path, params, pathWithParams) {
	    return path == pathWithParams.path && collection_1.shallowEqual(params, pathWithParams.parameters);
	}
	//# sourceMappingURL=create_url_tree.js.map

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var Observable_1 = __webpack_require__(34);
	var of_1 = __webpack_require__(361);
	var router_state_1 = __webpack_require__(370);
	var shared_1 = __webpack_require__(363);
	var url_tree_1 = __webpack_require__(364);
	var collection_1 = __webpack_require__(365);
	var tree_1 = __webpack_require__(371);
	var NoMatch = (function () {
	    function NoMatch(segment) {
	        if (segment === void 0) { segment = null; }
	        this.segment = segment;
	    }
	    return NoMatch;
	}());
	var InheritedFromParent = (function () {
	    function InheritedFromParent(parent, params, data, resolve) {
	        this.parent = parent;
	        this.params = params;
	        this.data = data;
	        this.resolve = resolve;
	    }
	    Object.defineProperty(InheritedFromParent.prototype, "allParams", {
	        get: function () {
	            return this.parent ? collection_1.merge(this.parent.allParams, this.params) : this.params;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InheritedFromParent.prototype, "allData", {
	        get: function () { return this.parent ? collection_1.merge(this.parent.allData, this.data) : this.data; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InheritedFromParent, "empty", {
	        get: function () {
	            return new InheritedFromParent(null, {}, {}, new router_state_1.InheritedResolve(null, {}));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return InheritedFromParent;
	}());
	function recognize(rootComponentType, config, urlTree, url) {
	    try {
	        var children = processSegment(config, urlTree.root, InheritedFromParent.empty, shared_1.PRIMARY_OUTLET);
	        var root = new router_state_1.ActivatedRouteSnapshot([], {}, {}, shared_1.PRIMARY_OUTLET, rootComponentType, null, urlTree.root, -1, router_state_1.InheritedResolve.empty);
	        var rootNode = new tree_1.TreeNode(root, children);
	        return of_1.of(new router_state_1.RouterStateSnapshot(url, rootNode, urlTree.queryParams, urlTree.fragment));
	    }
	    catch (e) {
	        if (e instanceof NoMatch) {
	            return new Observable_1.Observable(function (obs) {
	                return obs.error(new Error("Cannot match any routes: '" + e.segment + "'"));
	            });
	        }
	        else {
	            return new Observable_1.Observable(function (obs) { return obs.error(e); });
	        }
	    }
	}
	exports.recognize = recognize;
	function processSegment(config, segment, inherited, outlet) {
	    if (segment.pathsWithParams.length === 0 && segment.hasChildren()) {
	        return processSegmentChildren(config, segment, inherited);
	    }
	    else {
	        return processPathsWithParams(config, segment, 0, segment.pathsWithParams, inherited, outlet);
	    }
	}
	function processSegmentChildren(config, segment, inherited) {
	    var children = url_tree_1.mapChildrenIntoArray(segment, function (child, childOutlet) { return processSegment(config, child, inherited, childOutlet); });
	    checkOutletNameUniqueness(children);
	    sortActivatedRouteSnapshots(children);
	    return children;
	}
	function sortActivatedRouteSnapshots(nodes) {
	    nodes.sort(function (a, b) {
	        if (a.value.outlet === shared_1.PRIMARY_OUTLET)
	            return -1;
	        if (b.value.outlet === shared_1.PRIMARY_OUTLET)
	            return 1;
	        return a.value.outlet.localeCompare(b.value.outlet);
	    });
	}
	function processPathsWithParams(config, segment, pathIndex, paths, inherited, outlet) {
	    for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
	        var r = config_1[_i];
	        try {
	            return processPathsWithParamsAgainstRoute(r, segment, pathIndex, paths, inherited, outlet);
	        }
	        catch (e) {
	            if (!(e instanceof NoMatch))
	                throw e;
	        }
	    }
	    throw new NoMatch(segment);
	}
	function processPathsWithParamsAgainstRoute(route, rawSegment, pathIndex, paths, inherited, outlet) {
	    if (route.redirectTo)
	        throw new NoMatch();
	    if ((route.outlet ? route.outlet : shared_1.PRIMARY_OUTLET) !== outlet)
	        throw new NoMatch();
	    var newInheritedResolve = new router_state_1.InheritedResolve(inherited.resolve, getResolve(route));
	    if (route.path === '**') {
	        var params = paths.length > 0 ? collection_1.last(paths).parameters : {};
	        var snapshot_1 = new router_state_1.ActivatedRouteSnapshot(paths, collection_1.merge(inherited.allParams, params), collection_1.merge(inherited.allData, getData(route)), outlet, route.component, route, getSourceSegment(rawSegment), getPathIndexShift(rawSegment) - 1, newInheritedResolve);
	        return [new tree_1.TreeNode(snapshot_1, [])];
	    }
	    var _a = match(rawSegment, route, paths), consumedPaths = _a.consumedPaths, parameters = _a.parameters, lastChild = _a.lastChild;
	    var rawSlicedPath = paths.slice(lastChild);
	    var childConfig = route.children ? route.children : [];
	    var newInherited = route.component ?
	        InheritedFromParent.empty :
	        new InheritedFromParent(inherited, parameters, getData(route), newInheritedResolve);
	    var _b = split(rawSegment, consumedPaths, rawSlicedPath, childConfig), segment = _b.segment, slicedPath = _b.slicedPath;
	    var snapshot = new router_state_1.ActivatedRouteSnapshot(consumedPaths, collection_1.merge(inherited.allParams, parameters), collection_1.merge(inherited.allData, getData(route)), outlet, route.component, route, getSourceSegment(rawSegment), getPathIndexShift(rawSegment) + pathIndex + lastChild - 1, newInheritedResolve);
	    if (slicedPath.length === 0 && segment.hasChildren()) {
	        var children = processSegmentChildren(childConfig, segment, newInherited);
	        return [new tree_1.TreeNode(snapshot, children)];
	    }
	    else if (childConfig.length === 0 && slicedPath.length === 0) {
	        return [new tree_1.TreeNode(snapshot, [])];
	    }
	    else {
	        var children = processPathsWithParams(childConfig, segment, pathIndex + lastChild, slicedPath, newInherited, shared_1.PRIMARY_OUTLET);
	        return [new tree_1.TreeNode(snapshot, children)];
	    }
	}
	function match(segment, route, paths) {
	    if (route.path === '') {
	        if ((route.terminal || route.pathMatch === 'full') &&
	            (segment.hasChildren() || paths.length > 0)) {
	            throw new NoMatch();
	        }
	        else {
	            return { consumedPaths: [], lastChild: 0, parameters: {} };
	        }
	    }
	    var path = route.path;
	    var parts = path.split('/');
	    var posParameters = {};
	    var consumedPaths = [];
	    var currentIndex = 0;
	    for (var i = 0; i < parts.length; ++i) {
	        if (currentIndex >= paths.length)
	            throw new NoMatch();
	        var current = paths[currentIndex];
	        var p = parts[i];
	        var isPosParam = p.startsWith(':');
	        if (!isPosParam && p !== current.path)
	            throw new NoMatch();
	        if (isPosParam) {
	            posParameters[p.substring(1)] = current.path;
	        }
	        consumedPaths.push(current);
	        currentIndex++;
	    }
	    if ((route.terminal || route.pathMatch === 'full') &&
	        (segment.hasChildren() || currentIndex < paths.length)) {
	        throw new NoMatch();
	    }
	    var parameters = collection_1.merge(posParameters, consumedPaths[consumedPaths.length - 1].parameters);
	    return { consumedPaths: consumedPaths, lastChild: currentIndex, parameters: parameters };
	}
	function checkOutletNameUniqueness(nodes) {
	    var names = {};
	    nodes.forEach(function (n) {
	        var routeWithSameOutletName = names[n.value.outlet];
	        if (routeWithSameOutletName) {
	            var p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
	            var c = n.value.url.map(function (s) { return s.toString(); }).join('/');
	            throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
	        }
	        names[n.value.outlet] = n.value;
	    });
	}
	function getSourceSegment(segment) {
	    var s = segment;
	    while (s._sourceSegment) {
	        s = s._sourceSegment;
	    }
	    return s;
	}
	function getPathIndexShift(segment) {
	    var s = segment;
	    var res = 0;
	    while (s._sourceSegment) {
	        s = s._sourceSegment;
	        res += segment._pathIndexShift;
	    }
	    return res;
	}
	function split(segment, consumedPaths, slicedPath, config) {
	    if (slicedPath.length > 0 &&
	        containsEmptyPathMatchesWithNamedOutlets(segment, slicedPath, config)) {
	        var s = new url_tree_1.UrlSegment(consumedPaths, createChildrenForEmptyPaths(segment, consumedPaths, config, new url_tree_1.UrlSegment(slicedPath, segment.children)));
	        s._sourceSegment = segment;
	        s._pathIndexShift = 0;
	        return { segment: s, slicedPath: [] };
	    }
	    else if (slicedPath.length === 0 && containsEmptyPathMatches(segment, slicedPath, config)) {
	        var s = new url_tree_1.UrlSegment(segment.pathsWithParams, addEmptyPathsToChildrenIfNeeded(segment, slicedPath, config, segment.children));
	        s._sourceSegment = segment;
	        s._pathIndexShift = 0;
	        return { segment: s, slicedPath: slicedPath };
	    }
	    else {
	        return { segment: segment, slicedPath: slicedPath };
	    }
	}
	function addEmptyPathsToChildrenIfNeeded(segment, slicedPath, routes, children) {
	    var res = {};
	    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	        var r = routes_1[_i];
	        if (emptyPathMatch(segment, slicedPath, r) && !children[getOutlet(r)]) {
	            var s = new url_tree_1.UrlSegment([], {});
	            s._sourceSegment = segment;
	            s._pathIndexShift = segment.pathsWithParams.length;
	            res[getOutlet(r)] = s;
	        }
	    }
	    return collection_1.merge(children, res);
	}
	function createChildrenForEmptyPaths(segment, consumedPaths, routes, primarySegment) {
	    var res = {};
	    res[shared_1.PRIMARY_OUTLET] = primarySegment;
	    primarySegment._sourceSegment = segment;
	    primarySegment._pathIndexShift = consumedPaths.length;
	    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
	        var r = routes_2[_i];
	        if (r.path === '') {
	            var s = new url_tree_1.UrlSegment([], {});
	            s._sourceSegment = segment;
	            s._pathIndexShift = consumedPaths.length;
	            res[getOutlet(r)] = s;
	        }
	    }
	    return res;
	}
	function containsEmptyPathMatchesWithNamedOutlets(segment, slicedPath, routes) {
	    return routes
	        .filter(function (r) { return emptyPathMatch(segment, slicedPath, r) && getOutlet(r) !== shared_1.PRIMARY_OUTLET; })
	        .length > 0;
	}
	function containsEmptyPathMatches(segment, slicedPath, routes) {
	    return routes.filter(function (r) { return emptyPathMatch(segment, slicedPath, r); }).length > 0;
	}
	function emptyPathMatch(segment, slicedPath, r) {
	    if ((segment.hasChildren() || slicedPath.length > 0) && (r.terminal || r.pathMatch === 'full'))
	        return false;
	    return r.path === '' && r.redirectTo === undefined;
	}
	function getOutlet(route) {
	    return route.outlet ? route.outlet : shared_1.PRIMARY_OUTLET;
	}
	function getData(route) {
	    return route.data ? route.data : {};
	}
	function getResolve(route) {
	    return route.resolve ? route.resolve : {};
	}
	//# sourceMappingURL=recognize.js.map

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	__webpack_require__(332);
	__webpack_require__(375);
	var forkJoin_1 = __webpack_require__(359);
	var fromPromise_1 = __webpack_require__(376);
	function resolve(resolver, state) {
	    return resolveNode(resolver, state._root).map(function (_) { return state; });
	}
	exports.resolve = resolve;
	function resolveNode(resolver, node) {
	    if (node.children.length === 0) {
	        return fromPromise_1.fromPromise(resolveComponent(resolver, node.value).then(function (factory) {
	            node.value._resolvedComponentFactory = factory;
	            return node.value;
	        }));
	    }
	    else {
	        var c = node.children.map(function (c) { return resolveNode(resolver, c).toPromise(); });
	        return forkJoin_1.forkJoin(c).map(function (_) { return resolveComponent(resolver, node.value).then(function (factory) {
	            node.value._resolvedComponentFactory = factory;
	            return node.value;
	        }); });
	    }
	}
	function resolveComponent(resolver, snapshot) {
	    // TODO: vsavkin change to typeof snapshot.component === 'string' in beta2
	    if (snapshot.component && snapshot._routeConfig) {
	        return resolver.resolveComponent(snapshot.component);
	    }
	    else {
	        return Promise.resolve(null);
	    }
	}
	//# sourceMappingURL=resolve.js.map

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(34);
	var toPromise_1 = __webpack_require__(53);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PromiseObservable_1 = __webpack_require__(52);
	exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 377 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	/**
	 * @stable
	 */
	var RouterOutletMap = (function () {
	    function RouterOutletMap() {
	        /** @internal */
	        this._outlets = {};
	    }
	    RouterOutletMap.prototype.registerOutlet = function (name, outlet) { this._outlets[name] = outlet; };
	    return RouterOutletMap;
	}());
	exports.RouterOutletMap = RouterOutletMap;
	//# sourceMappingURL=router_outlet_map.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(331);
	var url_tree_1 = __webpack_require__(364);
	var router_link_1 = __webpack_require__(330);
	var RouterLinkActive = (function () {
	    function RouterLinkActive(router, element, renderer) {
	        var _this = this;
	        this.router = router;
	        this.element = element;
	        this.renderer = renderer;
	        this.classes = [];
	        this.routerLinkActiveOptions = { exact: false };
	        this.subscription = router.events.subscribe(function (s) {
	            if (s instanceof router_1.NavigationEnd) {
	                _this.update();
	            }
	        });
	    }
	    RouterLinkActive.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        this.links.changes.subscribe(function (s) { return _this.update(); });
	        this.linksWithHrefs.changes.subscribe(function (s) { return _this.update(); });
	        this.update();
	    };
	    Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
	        set: function (data) {
	            if (Array.isArray(data)) {
	                this.classes = data;
	            }
	            else {
	                this.classes = data.split(' ');
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
	    RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
	    RouterLinkActive.prototype.update = function () {
	        var _this = this;
	        if (!this.links || !this.linksWithHrefs)
	            return;
	        var currentUrlTree = this.router.parseUrl(this.router.url);
	        var isActiveLinks = this.reduceList(currentUrlTree, this.links);
	        var isActiveLinksWithHrefs = this.reduceList(currentUrlTree, this.linksWithHrefs);
	        this.classes.forEach(function (c) { return _this.renderer.setElementClass(_this.element.nativeElement, c, isActiveLinks || isActiveLinksWithHrefs); });
	    };
	    RouterLinkActive.prototype.reduceList = function (currentUrlTree, q) {
	        var _this = this;
	        return q.reduce(function (res, link) {
	            return res || url_tree_1.containsTree(currentUrlTree, link.urlTree, _this.routerLinkActiveOptions.exact);
	        }, false);
	    };
	    /** @nocollapse */
	    RouterLinkActive.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[routerLinkActive]' },] },
	    ];
	    /** @nocollapse */
	    RouterLinkActive.ctorParameters = [
	        { type: router_1.Router, },
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	    ];
	    /** @nocollapse */
	    RouterLinkActive.propDecorators = {
	        'links': [{ type: core_1.ContentChildren, args: [router_link_1.RouterLink,] },],
	        'linksWithHrefs': [{ type: core_1.ContentChildren, args: [router_link_1.RouterLinkWithHref,] },],
	        'routerLinkActiveOptions': [{ type: core_1.Input },],
	        'routerLinkActive': [{ type: core_1.Input },],
	    };
	    return RouterLinkActive;
	}());
	exports.RouterLinkActive = RouterLinkActive;
	//# sourceMappingURL=router_link_active.js.map

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var router_outlet_map_1 = __webpack_require__(377);
	var shared_1 = __webpack_require__(363);
	var RouterOutlet = (function () {
	    /**
	     * @internal
	     */
	    function RouterOutlet(parentOutletMap, location, componentFactoryResolver, name) {
	        this.location = location;
	        this.componentFactoryResolver = componentFactoryResolver;
	        parentOutletMap.registerOutlet(name ? name : shared_1.PRIMARY_OUTLET, this);
	    }
	    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
	        get: function () { return !!this.activated; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterOutlet.prototype, "component", {
	        get: function () {
	            if (!this.activated)
	                throw new Error('Outlet is not activated');
	            return this.activated.instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
	        get: function () {
	            if (!this.activated)
	                throw new Error('Outlet is not activated');
	            return this._activatedRoute;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterOutlet.prototype.deactivate = function () {
	        if (this.activated) {
	            this.activated.destroy();
	            this.activated = null;
	        }
	    };
	    RouterOutlet.prototype.activate = function (activatedRoute, providers, outletMap) {
	        this.outletMap = outletMap;
	        this._activatedRoute = activatedRoute;
	        var snapshot = activatedRoute._futureSnapshot;
	        var component = snapshot._routeConfig.component;
	        var factory;
	        try {
	            factory = typeof component === 'string' ?
	                snapshot._resolvedComponentFactory :
	                this.componentFactoryResolver.resolveComponentFactory(component);
	        }
	        catch (e) {
	            if (!(e instanceof core_1.NoComponentFactoryError))
	                throw e;
	            // TODO: vsavkin uncomment this once CompoentResolver is deprecated
	            // const componentName = component ? component.name : null;
	            // console.warn(
	            //     `'${componentName}' not found in precompile array.  To ensure all components referred
	            //     to by the RouterConfig are compiled, you must add '${componentName}' to the
	            //     'precompile' array of your application component. This will be required in a future
	            //     release of the router.`);
	            factory = snapshot._resolvedComponentFactory;
	        }
	        var inj = core_1.ReflectiveInjector.fromResolvedProviders(providers, this.location.parentInjector);
	        this.activated = this.location.createComponent(factory, this.location.length, inj, []);
	    };
	    /** @nocollapse */
	    RouterOutlet.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'router-outlet' },] },
	    ];
	    /** @nocollapse */
	    RouterOutlet.ctorParameters = [
	        { type: router_outlet_map_1.RouterOutletMap, },
	        { type: core_1.ViewContainerRef, },
	        { type: core_1.ComponentFactoryResolver, },
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['name',] },] },
	    ];
	    return RouterOutlet;
	}());
	exports.RouterOutlet = RouterOutlet;
	//# sourceMappingURL=router_outlet.js.map

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var common_1 = __webpack_require__(111);
	var platform_browser_1 = __webpack_require__(259);
	var common_router_providers_1 = __webpack_require__(381);
	/**
	 * A list of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * const router = [
	 *   {path: 'home', component: Home}
	 * ];
	 *
	 * bootstrap(AppCmp, [provideRouter(router, {enableTracing: true})]);
	 * ```
	 *
	 * @experimental
	 */
	function provideRouter(config, opts) {
	    if (opts === void 0) { opts = {}; }
	    return [
	        { provide: common_1.PlatformLocation, useClass: platform_browser_1.BrowserPlatformLocation }
	    ].concat(common_router_providers_1.provideRouter(config, opts));
	}
	exports.provideRouter = provideRouter;
	//# sourceMappingURL=router_providers.js.map

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var common_1 = __webpack_require__(111);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(331);
	var router_outlet_map_1 = __webpack_require__(377);
	var router_state_1 = __webpack_require__(370);
	var url_tree_1 = __webpack_require__(364);
	exports.ROUTER_CONFIG = new core_1.OpaqueToken('ROUTER_CONFIG');
	exports.ROUTER_OPTIONS = new core_1.OpaqueToken('ROUTER_OPTIONS');
	function setupRouter(ref, resolver, urlSerializer, outletMap, location, injector, config, opts) {
	    if (ref.componentTypes.length == 0) {
	        throw new Error('Bootstrap at least one component before injecting Router.');
	    }
	    var componentType = ref.componentTypes[0];
	    var r = new router_1.Router(componentType, resolver, urlSerializer, outletMap, location, injector, config);
	    ref.registerDisposeListener(function () { return r.dispose(); });
	    if (opts.enableTracing) {
	        r.events.subscribe(function (e) {
	            console.group("Router Event: " + e.constructor.name);
	            console.log(e.toString());
	            console.log(e);
	            console.groupEnd();
	        });
	    }
	    return r;
	}
	exports.setupRouter = setupRouter;
	function setupRouterInitializer(injector) {
	    // https://github.com/angular/angular/issues/9101
	    // Delay the router instantiation to avoid circular dependency (ApplicationRef ->
	    // APP_INITIALIZER -> Router)
	    setTimeout(function () {
	        var appRef = injector.get(core_1.ApplicationRef);
	        if (appRef.componentTypes.length == 0) {
	            appRef.registerBootstrapListener(function () { injector.get(router_1.Router).initialNavigation(); });
	        }
	        else {
	            injector.get(router_1.Router).initialNavigation();
	        }
	    }, 0);
	    return function () { return null; };
	}
	exports.setupRouterInitializer = setupRouterInitializer;
	/**
	 * An array of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * const config = [
	 *   {path: 'home', component: Home}
	 * ];
	 *
	 * bootstrap(AppCmp, [provideRouter(config)]);
	 * ```
	 *
	 * @stable
	 */
	function provideRouter(_config, _opts) {
	    return [
	        { provide: exports.ROUTER_CONFIG, useValue: _config }, { provide: exports.ROUTER_OPTIONS, useValue: _opts },
	        common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy },
	        { provide: url_tree_1.UrlSerializer, useClass: url_tree_1.DefaultUrlSerializer },
	        {
	            provide: router_1.Router,
	            useFactory: setupRouter,
	            deps: [
	                core_1.ApplicationRef, core_1.ComponentResolver, url_tree_1.UrlSerializer, router_outlet_map_1.RouterOutletMap, common_1.Location, core_1.Injector,
	                exports.ROUTER_CONFIG, exports.ROUTER_OPTIONS
	            ]
	        },
	        router_outlet_map_1.RouterOutletMap,
	        { provide: router_state_1.ActivatedRoute, useFactory: function (r) { return r.routerState.root; }, deps: [router_1.Router] },
	        // Trigger initial navigation
	        { provide: core_1.APP_INITIALIZER, multi: true, useFactory: setupRouterInitializer, deps: [core_1.Injector] }
	    ];
	}
	exports.provideRouter = provideRouter;
	//# sourceMappingURL=common_router_providers.js.map

/***/ },
/* 382 */
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
	var router_1 = __webpack_require__(329);
	var camelcase_1 = __webpack_require__(383);
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
	var start_1 = __webpack_require__(425);
	var start_child_1 = __webpack_require__(426);
	var start_main_1 = __webpack_require__(427);
	var router_data1_1 = __webpack_require__(428);
	var router_data2_1 = __webpack_require__(429);
	var aux_comp_1 = __webpack_require__(430);
	var metadata_test_1 = __webpack_require__(431);
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
	    { path: 'start', component: start_1.default, children: [
	            { path: 'main', component: start_main_1.default },
	            { path: 'auxcomp', component: aux_comp_1.default, outlet: 'aux' },
	            { path: 'child', component: start_child_1.default },
	            { path: 'router-data1/:name', component: router_data1_1.default },
	            { path: 'router-data2/:name/:message', component: router_data2_1.default }]
	    },
	    { path: 'metadata-test', component: metadata_test_1.default },
	];
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
/* 383 */
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


/***/ },
/* 384 */
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
/* 385 */
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
	var common_1 = __webpack_require__(111);
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
/* 386 */
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
/* 387 */
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
	var common_1 = __webpack_require__(111);
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
/* 388 */
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
	var common_1 = __webpack_require__(111);
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
/* 389 */
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
/* 390 */
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
/* 391 */
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
/* 392 */
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
/* 393 */
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
/* 394 */
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
	var common_1 = __webpack_require__(111);
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
/* 395 */
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
/* 396 */
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
	var common_1 = __webpack_require__(111);
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
/* 397 */
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
/* 398 */
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
	var common_1 = __webpack_require__(111);
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
/* 399 */
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
/* 400 */
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
/* 401 */
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
/* 402 */
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
/* 403 */
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
/* 404 */
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
/* 405 */
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
/* 406 */
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
/* 407 */
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
/* 408 */
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
/* 409 */
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
/* 410 */
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
/* 411 */
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
/* 412 */
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
/* 413 */
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
/* 414 */
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
/* 415 */
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
/* 416 */
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
/* 417 */
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
/* 418 */
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
/* 419 */
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
/* 420 */
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
/* 421 */
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
	var common_1 = __webpack_require__(111);
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
/* 422 */
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
/* 423 */
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


/***/ },
/* 424 */
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
	var common_1 = __webpack_require__(111);
	// StressComponent wraps a list item around an Angular 2 component
	// for Augury to detect.
	var StressItem = (function () {
	    function StressItem() {
	    }
	    StressItem = __decorate([
	        core_1.Component({
	            selector: 'stress-item',
	            inputs: ['value'],
	            template: "\n    <li>{{value}}</li>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StressItem);
	    return StressItem;
	}());
	//
	var StressTester = (function () {
	    function StressTester() {
	        this.values = [];
	    }
	    // onSubmit make an array of the specified count. Each element will result in
	    // a new Angular 2 component.
	    StressTester.prototype.onSubmit = function (regForm) {
	        var maxCount = regForm.value.count;
	        for (var i = 0; i < maxCount; i++) {
	            this.values.push(i);
	        }
	    };
	    StressTester = __decorate([
	        core_1.Component({
	            selector: 'stress-tester',
	            directives: [common_1.FORM_DIRECTIVES, common_1.NgForm, StressItem],
	            template: "\n    <p>Stress test Augury by adding values to the list. \n     Warning: may crash Augury and/or Chrome.</p>\n    <form #regForm=\"ngForm\" (ngSubmit)=\"onSubmit(regForm)\" novalidate>\n      <div>\n        <label for=\"node-count\">Specify number of values: </label>\n        <input type=\"number\" id=\"node-count\" ngControl=\"count\">\n      </div>\n      <button type=\"submit\">Add</button>\n    </form>\n    <br>\n    <h4>List of values</h4>\n    <ul>\n      <stress-item *ngFor=\"let val of values\" value=\"{{val}}\"></stress-item>\n      <li *ngIf=\"values.length === 0\">Hint: type a number and click Add above.</li>\n    </ul>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StressTester);
	    return StressTester;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StressTester;


/***/ },
/* 425 */
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
	var router_1 = __webpack_require__(329);
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
	            template: "\n  <div>\n    <ul class=\"nav nav-pills\">\n      <li>\n        <a (click)=\"goToRoute(0)\">Start Main</a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(1)\">Start Child</a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(2)\">Open AuxComp</a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(3)\">\n          RouterData1\n        </a>\n      </li>\n      <li>\n        <a (click)=\"goToRoute(4)\">\n          RouterData2\n        </a>\n      </li>\n    </ul>\n    <hr/>\n    <div class=\"inner-outlet\">\n      <router-outlet></router-outlet>\n      <router-outlet name=\"aux\"></router-outlet>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], Start);
	    return Start;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Start;


/***/ },
/* 426 */
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
/* 427 */
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
/* 428 */
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
	var router_1 = __webpack_require__(329);
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
/* 429 */
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
	var router_1 = __webpack_require__(329);
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
/* 430 */
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
/* 431 */
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
	            template: "\n    <attr-from-array attrIn='Data from the array.'>\n    </attr-from-array>\n\n    <attr-from-decorator attrIn='Data from the decorator.'>\n    </attr-from-decorator>\n\n    <attr-from-array-custom attrCustomIn='Data from array using a custom name.'>\n    </attr-from-array-custom>\n\n    <attr-from-decorator-custom attrCustomIn='Data from decorator using a custom name.'>\n    </attr-from-decorator-custom>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MetadataTest);
	    return MetadataTest;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MetadataTest;


/***/ }
]);
//# sourceMappingURL=app.c99eb0746973a1775a8e.bundle.js.map