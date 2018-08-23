export class Todo {
    description;
    done;
    
    constructor(description) {
        this.description = description;
        this.done = false;
    }
}