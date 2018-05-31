import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodorepositoryService } from '../../todorepository.service';

@Component({
  selector: 'app-disolaytodo',
  templateUrl: './disolaytodo.component.html',
  styleUrls: ['./disolaytodo.component.css']
})
export class DisolaytodoComponent implements OnInit {

  todoes: Todo[];

  constructor(private repository: TodorepositoryService) { }

  ngOnInit() {
    this.todoes = this.repository.getAll();
  }

  // public refresh(){
  //   this.todoes = this.repository.getAll();
  // }
}
