import { Todo } from "./todo";

export class App {
    name;
    description;
    todos;
    todoDescription;

    constructor() {
        this.name = 'app 1';
        this.description = 'app 1 description'
        this.todos = [];
        this.todoDescription = '';
    }

    doSomething() {
        alert('something happened');
    }

    addTodo() {
        if (this.todoDescription) {
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
            console.log(this.todos);
        }
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
            console.log(this.todos);
        }
    }
}