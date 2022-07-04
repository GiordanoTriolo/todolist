import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces/to-do-interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed-list-zone',
  templateUrl: './completed-list-zone.component.html',
  styleUrls: ['./completed-list-zone.component.scss']
})
export class CompletedListZoneComponent implements OnInit {

  completedListArr!: ToDoInterface[];
  buffer: boolean = false;

  constructor(private toDoService: TodoService) { }

  ngOnInit(): void {
    this.completedListArr = this.toDoService.getCompletedArr();
  }

  removeTask(task: ToDoInterface): void{
    this.buffer = true;
    setTimeout(() => {
      this.buffer = false;
      this.toDoService.removeCompletedTask(task);
    }, 2000);
  }

}
