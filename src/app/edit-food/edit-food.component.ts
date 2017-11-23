import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
@Input() foodChildSelected: Food;
@Output() doneClickSender = new EventEmitter();

  constructor() { }
  doneEditting(){
    this.doneClickSender.emit();
  }
  ngOnInit() {
  }

}
