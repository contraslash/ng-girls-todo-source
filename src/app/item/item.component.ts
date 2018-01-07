import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    
    <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
  {{ todoItem.title }}
  <input type="checkbox" (click)="completeItem()"/>
    </p>
    <button (click)="removeItem()">
      remove
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() remove:EventEmitter<any> = new EventEmitter();
  @Input() todoItem: any;

  isComplete: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }
  
  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
