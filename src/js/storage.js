function saveProject(projectName) {
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.push({
        name: projectName
    });

    localStorage.setItem('projects', JSON.stringify(projects));
}

function saveTask(taskName, taskDate) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push({
        name: taskName,
        date: taskDate
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}