import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedTableComponent } from './component/advanced-table.component';
// import { LibService } from './service/lib.service';

@NgModule({
  declarations: [AdvancedTableComponent],
  providers: [/* LibService */],
  imports: [ CommonModule ],
  exports: [AdvancedTableComponent]
})
export class AdvancedTableModule { }
