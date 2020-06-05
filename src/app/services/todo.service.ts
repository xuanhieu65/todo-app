import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private static readonly TodoStoragekey = 'todos';

  private todos: Todo[];
  private filteredTodos: Todo[];
  private etrt = 2;
  private etrt2323 = 2;
  private etrt23223233 = 2;

  constructor() { }
}
