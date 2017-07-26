import { Component } from '@angular/core';
import { Column, SortInfo, Align } from 'ngx-advanced-table';
// import { LibService } from 'ngx-advanced-table';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mycolumns: Column[];
  public mydata: Array<Object>;
  public sortInfo: SortInfo[];
  constructor() {
    this.mycolumns = [
      {attr: 'select', display: 'Sel', checkbox: true},
      {attr: 'age', display: 'Age', align: Align.Right/* , checkbox: true */ },
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
}
