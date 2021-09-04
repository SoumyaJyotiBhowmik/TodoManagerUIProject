import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;
  // todos=[new Todo(1,'aasad',false,new Date()),
  // new Todo(2,'dsadas',false,new Date()),
  // new Todo(3,'tytry',false,new Date()),
  // new Todo(4,'gffgf',false,new Date())];

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos() {
    this.todoService.retrieveAllTodos('soumya').subscribe(
      (resp) => {
        this.todos = resp;
        console.log('REsp' + resp);
      },
      (error) => {}
    );
  }
  deleteToDo(id) {
    this.todoService.deleteTodo('soumya', id).subscribe(
      (resp) => {
        console.log(resp);
        this.refreshTodos();
        this.message = `Delete of Todo ${id} Successful!!`;
      },
      (error) => {
        console.log('error');
      }
    );
  }
  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }
  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
