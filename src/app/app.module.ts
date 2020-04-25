import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DepartlistComponent } from './DepartMentCompo/departlist/departlist.component';
import { DeparaddComponent } from './DepartMentCompo/deparadd/deparadd.component';
import { DepartupdateComponent } from './DepartMentCompo/departupdate/departupdate.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DepartlistComponent,
    DeparaddComponent,
    DepartupdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
