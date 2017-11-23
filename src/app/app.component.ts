import { Component, Input } from '@angular/core';
import { Food } from './food';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

masterFoodsList:Food[]=[
  new Food("Chips", "Fries", 34),
  new Food("Rice", "fsfs", 534),
  new Food("Chapati", "Wheat", 324)
];

finishedEditting(){
  this.selectedFood = null;
}

selectedFood: Food =null;

  addNewFood(newFoodFromChild:Food){
    this.masterFoodsList.unshift(newFoodFromChild);
  }
showDetails(myFood:Food){
  this.selectedFood =myFood;
}
delFood(FoodToDel:Food){

  var index:number = this.masterFoodsList.indexOf(FoodToDel);
  this.masterFoodsList.splice(index,1);
}

}
