(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('components/button/Button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'components/button/Button'], factory) :
	(global = global || self, factory(global.reactSampleComponentsLibrary = {}, global.Button));
}(this, (function (exports, Button) { 'use strict';

	Object.defineProperty(exports, 'Button', {
		enumerable: true,
		get: function () {
			return Button.Button;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
