import { NgModule } from '@angular/core';

import { AdvancedTableComponent } from './component/advanced-table.component';
// import { LibService } from './service/lib.service';

@NgModule({
  declarations: [AdvancedTableComponent],
  providers: [/* LibService */],
  exports: [AdvancedTableComponent]
})
export class AdvancedTableModule { }
