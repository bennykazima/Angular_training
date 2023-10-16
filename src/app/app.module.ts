import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BicepsComponent } from './biceps/biceps.component';
import { Exercice_physique } from './modules/exercice_physique.module';

@NgModule({
  declarations: [
    AppComponent,
    BicepsComponent
  ],
  imports: [
    BrowserModule,
    Exercice_physique
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
