import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-secion',
  templateUrl: './form-secion.component.html',
  styleUrls: ['./form-secion.component.css']
})
export class FormSecionComponent{

  @Output() foodSender=new EventEmitter();

  addFoodOptions(name:string,description:string,calories:number){
var foodDetails:Food=new Food(name,description,calories)
this.foodSender.emit(foodDetails);


  }
}

export class Food{
  constructor(public name:string,public description:string,public calories:number)
    {

  }
}
