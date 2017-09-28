import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroDetailsComponent } from './registros/registro-details/registro-details.component';
import { RegistroListComponent } from './registros/registro-list/registro-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroDetailsComponent,
    RegistroListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
