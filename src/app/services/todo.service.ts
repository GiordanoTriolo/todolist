import { Injectable } from '@angular/core';
import { ToDoInterface } from '../interfaces/to-do-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /* array lista normale */
  private toDoArr: ToDoInterface[] = [];

  /* array lista di task completate */
  private completedArr: ToDoInterface[] = [];

  constructor() { }

  /* get della lista normale */
  getToDoArr(): ToDoInterface[]{
    return this.toDoArr;
  }

  /* get della lista dlle task completate */
  getCompletedArr(): ToDoInterface[]{
    return this.completedArr;
  }

  /* aggiunta task alla lista normale */
  addTask(task: ToDoInterface): void{
    this.toDoArr.push(task);
  }

  /* mando la task nella lista delle completate */
  checkTask(task: ToDoInterface): void{
    this.completedArr.push(task);
  }

  /* rimuovo una task dalla lista normale */
  removeUndoneTask(task: ToDoInterface): void{
    let index = this.toDoArr.indexOf(task);
    this.toDoArr.splice(index, 1);
  }

  /* rimuovo una task dalla lista delle completate */
  removeCompletedTask(task: ToDoInterface): void{
    let index = this.completedArr.indexOf(task);
    this.completedArr.splice(index, 1);
  }
}
