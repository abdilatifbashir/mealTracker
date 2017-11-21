import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormSecionComponent } from './form-secion/form-secion.component';
import { MealOptionComponent } from './meal-option/meal-option.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FoodListComponent } from './food-list/food-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSecionComponent,
    MealOptionComponent,
    EditFoodComponent,
    NewFoodComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
