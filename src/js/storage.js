export function saveProject(projectClass) {
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.push({
        title: projectClass.title,
        tasks: projectClass.tasks
    });

    localStorage.setItem('projects', JSON.stringify(projects));
}

export function saveTask(taskClass) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push({
        title: taskClass.title,
        description: taskClass.description,
        priority: taskClass.priority,
        date: taskClass.date,
        status: taskClass.status
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function setActiveProject(projectTitle) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.forEach(project => {
        project.active = (project.title === projectTitle);
    });

    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('activeProject', projectTitle);
}