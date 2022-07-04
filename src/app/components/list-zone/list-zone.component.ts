import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces/to-do-interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-zone',
  templateUrl: './list-zone.component.html',
  styleUrls: ['./list-zone.component.scss']
})
export class ListZoneComponent implements OnInit {

  listArr!: ToDoInterface[];
  buffer: boolean = false;

  constructor(private toDoService: TodoService) { }

  ngOnInit(): void {
    this.listArr = this.toDoService.getToDoArr();
  }

  removeTask(task: ToDoInterface): void{
    this.buffer = true;
    setTimeout(() => {
      this.buffer = false;
      this.toDoService.removeUndoneTask(task);
    }, 2000);
  }

  completeTask(task: ToDoInterface): void{
    this.buffer= true;
    setTimeout(() => {
      this.buffer = false;
      task.completed = true;
      this.toDoService.checkTask(task);
      this.toDoService.removeUndoneTask(task);
    }, 2000);
  }
}
