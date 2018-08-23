import { Todo } from "./todo";

export class App {
    name;
    todos;
    todoDescription;

    constructor() {
        this.name = 'Todo App';
        if (localStorage.getItem('todos')) {
            this.todos = JSON.parse(localStorage.getItem('todos'));
        } else {
            this.todos = [];
        }
        this.todoDescription = '';
    }

    doSomething() {
        alert('something happened');
    }

    addTodo() {
        if (this.todoDescription) {
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
            const json = JSON.stringify(this.todos);
            localStorage.setItem('todos', json);
        }
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
            const json = JSON.stringify(this.todos);
            localStorage.setItem('todos', json);
        }
    }

    doneClicked(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos[index].done = true;
            const json = JSON.stringify(this.todos);
            localStorage.setItem('todos', json);
        }
    }
}