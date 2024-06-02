export class Task {
    constructor(title, description, status=false, priority='low', date) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.date = date;
    }

    statusSwitch () {
        this.status = !this.status;
    }

    updateTask (title, description, priority, date) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }
}

export class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
    
    addTask(task) {
        this.tasks.push(task);
    }
    
    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}