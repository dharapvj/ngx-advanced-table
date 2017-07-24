import { Component, Input, OnInit } from '@angular/core';
// import { orderBy as _orderBy, map as _map, find as _find } from 'lodash';
// import * as _ from 'lodash';
import { orderBy as _orderBy, map as _map, find as _find } from 'lodash-es';

import { SortInfo, Column, Align } from './table-def';

// This way 'sort' is a "private" column attribute inferred from sortInfo attribute
interface InColumn extends Column {
  sort?: 'asc'|'desc';
  alignClass: string;
}

@Component({
  selector: 'advanced-table',
  templateUrl: './advanced-table.component.html',
  styleUrls: ['./advanced-table.component.css']
})
export class AdvancedTableComponent implements OnInit {
  @Input()
  public columns: Column[];
  @Input()
  public data: Array<any>;
  @Input()
  public sortInfo: Array<SortInfo>;

  private _columns: InColumn[];

  public ngOnInit() {
    // create private columns array.
    this._columns = this.columns as InColumn[];

    // sort..
    // console.log('before sort', this.data, _map(this.sortInfo, 'attr'));
    this.data = _orderBy(this.data,
      _map(this.sortInfo, 'attr'),
      _map(this.sortInfo, 'sortDir'));
    // console.log('after sort', this.data);
    this.sortInfo.forEach( (itm) => {
      const item = _find(this._columns, { attr: itm.attr});
      item.sort = itm.sortDir;
    });
    // format the data if there are formatters.
    this._columns.forEach( (col) => {
      if ( col.formatter ) {
        this.data.forEach( (itm) => {
          // console.log('data to be formatted', itm[col.attr]);
          itm[col.attr] = col.formatter(itm[col.attr]);
        });
      }
      switch (col.align) {
        case Align.Left:
          col.alignClass = 'left';
          break;
        case Align.Center:
          col.alignClass = 'center';
          break;
        case Align.Right:
          col.alignClass = 'right';
          break;
        default:
          break;
      }
    });
    // console.log('columns', this.columns);
  }

  /**
   * Will sort by the column it was click upon.
   * If existing sorting exists on that column, it toggles the sorting order.
   * Default sorting order would be descending.
   * @param col The column to sort on
   */
  private toggleSort(col: InColumn) {
    // console.log(col, arguments);
    const existingSort: string = col.sort; //  _find(this.sortInfo, {attr: col.attr});
    if (! existingSort) {
      col.sort = 'asc';
    }else {
      col.sort = this.toggleSortOrder(existingSort);
    }
    // Do actual sorting of data with new sort order
    this.data = _orderBy(this.data, col.attr, col.sort);
    // FIXME remove sort information on all other columns.
    this.sortInfo = null;
    this._columns.forEach( col1 => {
      if (col !== col1) {
        col1.sort = undefined;
      }
    });
  }

  toggleSortOrder(sort: string): 'asc'|'desc' {
    return sort === 'asc' ? 'desc' : 'asc';
  }
}
