import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterFoodList:Food= new Food("","",0);

  displayFood(newFoodFromMyChild:Food){
    this.masterFoodList=newFoodFromMyChild;
  }
}

export class Food{
  constructor(public name:string,public description:string,public calories:number)
    {

  }
}
