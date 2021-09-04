import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(userName: string) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${userName}/todos`
    );
  }
  deleteTodo(userName: string, id: number) {
    return this.http.delete<Todo>(
      `http://localhost:8080/users/${userName}/todos/${id}`
    );
  }
  retrieveTodo(userName: string, id: number) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${userName}/todos/${id}`
    );
  }

  updateTodo(userName: string, id: number, todo: Todo) {
    return this.http.put<Todo>(
      `http://localhost:8080/users/${userName}/todos/${id}`,
      todo
    );
  }
  createTodo(userName: string, todo: Todo) {
    return this.http.post<Todo>(
      `http://localhost:8080/users/${userName}/todos`,
      todo
    );
  }
}
