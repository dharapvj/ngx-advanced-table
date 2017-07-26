# NgAdvancedTable
[![Build Status][travis-badge]][travis-badge-url]  [![npm version](https://badge.fury.io/js/ngx-advanced-table.svg)](https://badge.fury.io/js/ngx-advanced-table) https://david-dm.org/dharapvj/ngx-advanced-table.svg

[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]

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
* [X] Row Selection (using checkbox)
* [ ] Row Event hooks
* [ ] Re-render notification with new data (Observable?)

## Usage

* include the component in your project

````shell
npm i ngx-advanced-table -S
````

* include the `AdvancedTableModule` in your AppModule.
````ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdvancedTableModule } from 'ngx-advanced-table';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AdvancedTableModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

````
* declare the component in you component template
````html
<advanced-table [data]="mydata" [columns]="mycolumns" [sortInfo]="sortInfo"></advanced-table>
````
* Pass on data to the table component in your TS file.
````ts
  constructor() {
    this.mycolumns = [
      {attr: 'select', display: 'Sel', checkbox: true},
      {attr: 'age', display: 'Age', align: Align.Right, checkbox: true },
      {attr: 'fName', display: 'First Name', align: Align.Center,
        formatter: (itm: string) => {
          // console.log('my formatter', itm);
          return itm.toUpperCase();
        }
      },
      {attr: 'lName', display: 'Last Name', align: Align.Left},
      {attr: 'doj', display: 'Date of Joining', align: Align.Right,
        formatter: (itm: Date) => {
          return '' + itm.getFullYear();
        }
      }
    ];
    this.mydata =  [
      {age: 40, fName: 'Ravi', lName: 'Kumar', doj: new Date('2011-10-19')},
      {age: 20, fName: 'Vijay', lName: 'Dharap', doj: new Date('2011-10-20')},
      {age: 20, fName: 'Avinash', lName: 'Dongre', doj: new Date('2011-10-21')},
      {age: 50, fName: 'Sanjay', lName: 'Das', doj: new Date('2011-10-22')}
    ];
    this.sortInfo = [
      {attr: 'age', sortDir: 'desc'},
      {attr: 'fName', sortDir: 'asc'}
    ];
  }

````

#### To release (just for my own reference)

````
git commit
npm run release
npm run build
npm publish dist/ --registry http://registry.npmjs.org
verify travis page
````

[travis-badge]: https://travis-ci.org/dharapvj/ngx-advanced-table.svg?branch=master
[travis-badge-url]: https://travis-ci.org/dharapvj/ngx-advanced-table
[david-badge]: https://david-dm.org/dharapvj/ngx-advanced-table.svg
[david-badge-url]: https://david-dm.org/dharapvj/ngx-advanced-table
[david-dev-badge]: https://david-dm.org/dharapvj/ngx-advanced-table/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/dharapvj/ngx-advanced-table?type=dev
