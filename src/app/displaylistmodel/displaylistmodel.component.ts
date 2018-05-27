import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-displaylistmodel',
  templateUrl: './displaylistmodel.component.html',
  styleUrls: ['./displaylistmodel.component.css']
})
export class DisplaylistmodelComponent implements OnInit {

  todoes: Todo[] = [
    new Todo(1, "Create Angular App", true, new Date()),
    new Todo(2, "Invoke REST API", false, new Date()),
    new Todo(3, "Use HTTP Client", false, new Date()),
  ];

  constructor() { }

  ngOnInit() {
  }

}
