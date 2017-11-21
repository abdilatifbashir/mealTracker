import { Component, OnInit } from '@angular/core';
import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  @Output() newFoodSender=new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
