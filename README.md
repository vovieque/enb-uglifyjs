# enb-uglifyjs

Прогоняет код через UglifyJS.

## Установка

```
npm i enb-uglifyjs
```

## Использование

**Опции**

* *String* **source** — Исходный таргет. Обязательная опция.
* *String* **target** — Результирующий таргет. По умолчанию — `?.js`.

**Пример**

```javascript
[ require('enb-uglifyjs/techs/uglifyjs'), { source: '?.js', target: '_?.js' ;
```
