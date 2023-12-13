/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(todo) {
    this.todos = this.todos.filter((el) => el !== todo);
    return this.todos;
  }
  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
    return `updated ${updatedTodo}`
  }
  getAll() {
   return this.todos;
  }
  get(index) {
  return  this.todos[index];
  }
  clear() {
    this.todos = [];
    return this.todos
  }
}

// const todo = new Todo();

// todo.addTodo("do oops in js");
// todo.addTodo("revise promise");
// todo.getTodo(0);
// todo.updateTodo(0,'revise oops')
// todo.getAllTodos();

module.exports = Todo;
