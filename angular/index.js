module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "angular"
  ],
  "rules": {
    // The angular.element method should be used instead of the $ or jQuery object
    "angular/angularelement": 2,
    // The number of AngularJS components in one file should be limited.
    "angular/component-limit": [1, 1],
    // Should not set properties on $scope in controllers. Use controllerAs syntax and add data to 'this'.
    "angular/controller-as": 2,
    // Use Angular's controllerAs syntax when defining routes or states.
    "angular/controller-as-route": 2,
    // Capture variable for 'this' when using the controllerAs syntax
    "angular/controller-as-vm": [2, "vm"],
    // All controllers should have a name starting with the parameter you can define in your config object.
    "angular/controller-name": [2, "/[A-Z].*Controller$/"],
    // When you want to create a new promise, you should not use the $q.deferred anymore.
    "angular/deferred": 0,
    // You should use the angular.isUndefined or angular.isDefined methods instead of using the keyword undefined.
    "angular/definedundefined": 2,
    // All your DI should use the same syntax : the Array or function syntaxes
    "angular/di": [2, "function"],
    // Injected dependencies should be sorted alphabetically.
    "angular/di-order": [0, true],
    // All your directives should have a name starting with the parameter you can define in your config object.
    "angular/directive-name": 0, // ie. [2, "vml"]
    // Not all directive restrictions may be desirable. Also it might be desirable to define default restrictions, or explicitly not.
    "angular/directive-restrict": [0, {
      "restrict": "AE",
      "explicit": "never"
    }],
    // Instead of the default document object, you should prefer the AngularJS wrapper service $document.
    "angular/document-service": 2,
    // If you have one empty controller, maybe you have linked it in your Router configuration or in one of your views.
    "angular/empty-controller": 1,
    // All your file names should match the angular component name.
    "angular/file-name": 0,
    // All your filters should have a name starting with the parameter you can define in your config object.
    "angular/filter-name": 0, // ie. [2, "vml"]
    // angular.forEach method instead of the default JavaScript implementation [].forEach.
    "angular/foreach": 0,
    // Anonymous or named functions inside AngularJS components.
    "angular/function-type": [2, "named"],
    // Instead of the default setInterval function, you should use the AngularJS wrapper service $interval
    "angular/interval-service": 2,
    // Use angular.fromJson or angular.toJson instead of JSON.parse and JSON.stringify
    "angular/json-functions": 2,
    // Use $log service instead of console for the methods 'log', 'debug', 'error', 'info', 'warn'
    "angular/log": 2,
    // Module dependencies should be sorted in a logical manner.
    "angular/module-dependency-order": [0, {
      "grouped": true,
      "prefix": null
    }],
    // When using a module, avoid using a variable and instead use chaining with the getter syntax
    "angular/module-getter": 2,
    // When you create a new module, its name should start with the parameter you can define in your config object.
    "angular/module-name": 0, // ie. [2, "vml"]
    // Declare modules without a variable using the setter syntax.
    "angular/module-setter": 2,
    // All methods defined in the angular.mock object are also available in the object window
    "angular/no-angular-mock": 2,
    // According to the Component-First pattern, we should avoid the use of AngularJS controller.
    "angular/no-controller": 0,
    // In Angular 1.4, the $cookieStore service is now deprected. Please use the $cookies service instead
    "angular/no-cookiestore": 2,
    // The scope's $digest() method shouldn't be used. You should prefer the $apply method.
    "angular/no-digest": 2,
    // Disallow the $http success and error function. Instead the standard promise API should be used.
    "angular/no-http-callback": 2,
    // Instead of using inline HTML templates, it is better to load the HTML from an external file.
    "angular/no-inline-template": [0, {
      "allowSimple": true
    }],
    // You should not wrap angular.element object into jQuery(), because angular.element already return jQLite element
    "angular/no-jquery-angularelement": 2,
    // All scope's properties/methods starting with $$ are used internally by AngularJS.
    "angular/no-private-call": 2,
    // You should prefer the factory() method instead of service()
    "angular/no-service-method": 2,
    // Some services should be used only in a specific AngularJS service (Ajax-based service for example), in order to follow the separation of concerns paradigm.
    "angular/no-services": [2, ["$http", "$resource", "Restangular"]],
    // Watch and On methods on the scope object should be assigned to a variable, in order to be deleted in a $destroy event handle
    "angular/on-watch": 2,
    // Check the service used to send request to your REST API.
    "angular/rest-service": 0,
    // All your services should have a name starting with the parameter you can define in your config object.
    "angular/service-name": 0,
    // Instead of the default setTimeout function, you should use the AngularJS wrapper service $timeout
    "angular/timeout-service": 2,
    // Use the angular.isArray method instead of the default JavaScript implementation (typeof [] === "[object Array]").
    "angular/typecheck-array": 2,
    // Use the angular.isDate method instead of the default JavaScript implementation (typeof new Date() === "[object Date]").
    "angular/typecheck-date": 2,
    // Use the angular.isFunction method instead of the default JavaScript implementation (typeof function(){} ==="[object Function]").
    "angular/typecheck-function": 2,
    // Use the angular.isNumber method instead of the default JavaScript implementation (typeof 3 === "[object Number]").
    "angular/typecheck-number": 2,
    // Use the angular.isObject method instead of the default JavaScript implementation (typeof {} === "[object Object]").
    "angular/typecheck-object": 2,
    // Use the angular.isRegexp method instead of the default JavaScript implementation (toString.call(/^A/) === "[object RegExp]").
    "angular/typecheck-regexp": 2,
    // Use the angular.isString method instead of the default JavaScript implementation (typeof "" === "[object String]").
    "angular/typecheck-string": 2,
    // For the execution of the watchers, the $digest method will start from the scope in which we call the method.
    "angular/watchers-execution": [0, "$digest"],
    // Instead of the default window object, you should prefer the AngularJS wrapper service $window.
    "angular/window-service": 2
  }
}
