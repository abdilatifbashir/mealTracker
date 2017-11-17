import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormSecionComponent } from './form-secion/form-secion.component';
import { MealOptionComponent } from './meal-option/meal-option.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSecionComponent,
    MealOptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
