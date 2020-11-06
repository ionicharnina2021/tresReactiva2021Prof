import { ComponModule } from './componentes/compon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArribaComponent } from './componentes/arriba/arriba.component';

@NgModule({
  declarations: [
    AppComponent,
    ArribaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ComponModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
