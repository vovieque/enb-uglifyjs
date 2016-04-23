/**
 * enb-uglifyjs
 * =========
 *
 * Прогоняет код через UglifyJS.
 *
 * **Опции**
 *
 * * *String* **source** — Исходный таргет. Обязательная опция.
 * * *String* **target** — Результирующий таргет. По умолчанию — `?.js`.
 *
 * **Пример**
 * ```javascript
 * [ require('enb-uglifyjs/techs/uglifyjs'), { source: '?.js', target: '_?.js' } ];
 * ```
 */
var UglifyJS = require('uglify-js');
var vow = require('vow');

module.exports = require('enb/lib/build-flow').create()
	.name('uglifyjs')
	.target('target', '?.js')
	.defineRequiredOption('target')
	.defineRequiredOption('source')
	.useSourceFilename('source')
	.builder(function (source) {
		return UglifyJS.minify(source).code;
	})
	.createTech();
