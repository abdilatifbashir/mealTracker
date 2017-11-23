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

}
