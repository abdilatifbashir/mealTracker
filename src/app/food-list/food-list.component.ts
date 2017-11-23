import { Component, Output,Input,EventEmitter } from '@angular/core';

import { Food } from '../food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent{
   @Input() childFoodList:Food[];
   @Output() editFood = new EventEmitter();

   editFoodButton(foodToEdit: Food){
     this.editFood.emit(foodToEdit);
   }
   @Output() deleteFood = new EventEmitter();

   deleteFoodButton(foodToDelete: Food){
     console.log("FoodToDel:" + foodToDelete.name);
     this.deleteFood.emit(foodToDelete);
   }
  constructor() { }


}
