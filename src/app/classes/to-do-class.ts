export class ToDoClass {

  id: number;
  title: string;
  completed: boolean;

  constructor(_id: number, _title: string, _completed: boolean){
    this.id = _id;
    this.title = _title;
    this.completed = _completed;
  }
}
