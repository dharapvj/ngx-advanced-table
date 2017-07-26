import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedTableComponent } from './component/advanced-table.component';
import { AdvTableRowComponent } from './component/row.component';
// import { LibService } from './service/lib.service';

@NgModule({
  declarations: [AdvancedTableComponent, AdvTableRowComponent],
  providers: [/* LibService */],
  imports: [ CommonModule ],
  exports: [AdvancedTableComponent]
})
export class AdvancedTableModule { }
