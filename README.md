# NgAdvancedTable
[![Build Status][travis-badge]][travis-badge-url][![npm version](https://badge.fury.io/js/ngx-advanced-table.svg)](https://badge.fury.io/js/ngx-advanced-table) 

Advanced table component for Angular(2+).

## Features
* [X] Base Table with dynamic data.
    * [ ] Header text should be center aligned
    * [ ] Odd Even coloring should be configurable using @Input parameter - off / default color / color def for odd and even.
* [X] Dynamic column definition.
    * [X] left or right Alignment for text
    * [ ] infer alignment using data type
    * [X] Text for header
* [X] Sorting.
    * [X] Programatic Sorting specification
    * [X] Show sort indicators on header
    * [X] Togger sort order on clicking the header
* [ ] Pagination (This will just provide a visual information strip. Actual pagination is to be handled externally).
* [X] Checkbox column.
* [ ] Using Generics so that the DataType of data can be intelligently used?
* [ ] Scrollable Table with Fixed headers
* [X] Column Formatters
* [ ] Row Selection
* [ ] Row Event hooks

#### To release (just for my own reference)

````
npm run release
npm run build
npm publish dist/ --registry http://registry.npmjs.org
````

[travis-badge]: https://travis-ci.org/dharapvj/ngx-advanced-table.svg?branch=master
[travis-badge-url]: https://travis-ci.org/dharapvj/ngx-advanced-table
