export class Task {
    constructor(title, description, date, priority='Low', status=false) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
        this.status = status;
    }

    statusSwitch () {
        this.status = !this.status;
    }
}

export class Project {
    constructor(title, active=true) {
        this.title = title;
        this.tasks = [];
        this.active = active;
    }
    
    addTask(task) {
        this.tasks.push(task);
    }
}