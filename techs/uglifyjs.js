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
var asyncFs = require('enb').asyncFs || require('enb/lib/fs/async-fs');
var path = require('path');

module.exports = require('enb/lib/build-flow').create()
	.name('uglifyjs')
	.target('target', '?.js')
	.defineRequiredOption('target')
	.defineRequiredOption('source')
	.useSourceFilename('source')
	.builder(function (source) {
		var queue = this.node.getSharedResources().jobQueue;
		// Читаем код асинхронно вместо синхронного чтения средствами UglifyJS
		return asyncFs.read(source, 'utf-8').then(function(code){
			var minifierFilename = path.resolve(__dirname, '../lib/uglifyjs-minifier');
			return queue.push(minifierFilename, code, {fromString:true})
				.then(function (resultObj) {
					return resultObj.code;
				});
		});
	})
	.createTech();
