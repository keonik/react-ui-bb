(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('components/Button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'components/Button'], factory) :
	(global = global || self, factory(global.reactSampleComponentsLibrary = {}, global.Button));
}(this, (function (exports, Button) { 'use strict';

	Button = Button && Button.hasOwnProperty('default') ? Button['default'] : Button;



	exports.Button = Button;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
