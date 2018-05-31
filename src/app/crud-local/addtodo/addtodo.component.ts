import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodorepositoryService } from '../../todorepository.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  newTodo = new Todo(1, "Creating videos", true, new Date());

  constructor(private repository: TodorepositoryService) { }

  ngOnInit() {
  }

  onSubmit() { 
    alert(this.newTodo.title + " added successfully");
    this.repository.add(this.newTodo);
   }
}
