import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  formToDo = new FormGroup({
    task : new FormControl('',[Validators.required,Validators.minLength(5)]),
    description : new FormControl('',Validators.required)
  }) 

}
