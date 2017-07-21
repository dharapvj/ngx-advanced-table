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
