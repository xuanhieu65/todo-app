import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private static readonly TodoStoragekey = 'todos';

  private todos: Todo[];
  private filteredTodos: Todo[];
  private test = 1;

  constructor() { }
}
