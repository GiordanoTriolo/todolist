import { Component, OnInit } from '@angular/core';
import { ToDoClass } from 'src/app/classes/to-do-class';
import { ToDoInterface } from 'src/app/interfaces/to-do-interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  id: number = 0;
  title!: string;
  completed: boolean = false;
  buffer: boolean = false;

  constructor(private toDoService: TodoService) { }

  ngOnInit(): void {
  }

  add(): void{
    this.buffer = true;
    setTimeout(() => {
      this.buffer = false;
      let newTask= new ToDoClass(this.id, this.title, this.completed);
      this.toDoService.addTask(newTask);
      this.id++;
    }, 2000);
  }
}
