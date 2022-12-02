import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentefotosperfumesComponent } from './componentefotosperfumes/componentefotosperfumes.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentefotosperfumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
