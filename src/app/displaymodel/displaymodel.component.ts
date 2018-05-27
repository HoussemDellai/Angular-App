import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-displaymodel',
  templateUrl: './displaymodel.component.html',
  styleUrls: ['./displaymodel.component.css']
})
export class DisplaymodelComponent implements OnInit {

  todo: Todo = new Todo(1, "Create an Angular app", false, new Date());

  constructor() { }

  ngOnInit() {
  }

}
