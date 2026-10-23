'use strict';

var util = require('util');
if (!util.isRegExp) util.isRegExp = function (arg) { return Object.prototype.toString.call(arg) === '[object RegExp]'; };
if (!util.isDate) util.isDate = function (arg) { return Object.prototype.toString.call(arg) === '[object Date]'; };
if (!util.isError) util.isError = function (arg) { return Object.prototype.toString.call(arg) === '[object Error]'; };
if (!util.isBoolean) util.isBoolean = function (arg) { return typeof arg === 'boolean'; };
if (!util.isNull) util.isNull = function (arg) { return arg === null; };
if (!util.isNullOrUndefined) util.isNullOrUndefined = function (arg) { return arg === null || arg === undefined; };
if (!util.isNumber) util.isNumber = function (arg) { return typeof arg === 'number'; };
if (!util.isString) util.isString = function (arg) { return typeof arg === 'string'; };
if (!util.isSymbol) util.isSymbol = function (arg) { return typeof arg === 'symbol'; };
if (!util.isUndefined) util.isUndefined = function (arg) { return arg === undefined; };
if (!util.isObject) util.isObject = function (arg) { return arg !== null && typeof arg === 'object'; };
if (!util.isFunction) util.isFunction = function (arg) { return typeof arg === 'function'; };
if (!util.isPrimitive) util.isPrimitive = function (arg) { return arg === null || (typeof arg !== 'object' && typeof arg !== 'function'); };
if (!util.isBuffer) util.isBuffer = Buffer.isBuffer;
if (!util._extend) util._extend = Object.assign;

require('./gulp/index.js');