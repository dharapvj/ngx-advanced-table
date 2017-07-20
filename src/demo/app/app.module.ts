import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdvancedTableModule } from 'quickstart-lib';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AdvancedTableModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
