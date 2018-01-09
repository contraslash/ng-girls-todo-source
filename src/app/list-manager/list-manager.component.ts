import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoListStorageService } from '../todo-list-storage.service';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
  <h1>
  {{ title }}
  </h1>  

  <todo-input (submit)="addItem($event)"></todo-input>

  <ul>
  <li *ngFor="let item of todoList">
    <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
  </li>
  </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList = [];
  constructor(private storage:TodoListStorageService) { }

  ngOnInit() {
    this.todoList = this.storage.get();
  }

  title = 'todo works';


  addItem(title: string) {
    this.todoList = this.storage.post({ title:title });
  }

  removeItem(item) {
    this.todoList = this.storage.destroy(item);
  }

}
