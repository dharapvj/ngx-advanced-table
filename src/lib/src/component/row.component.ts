import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Column } from './table-def';

@Component({
  selector: 'tr[adv-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  host: {'[class.selected]' : 'isSelected'}
})
export class AdvTableRowComponent {
  @Input() rowDatum: any;

  @Input()
  public columns: Column[];
  private isSelected = false;

  rowSelToggle(data: any) {
    console.log('row was selected', data);
    this.isSelected = true;
  }
}
