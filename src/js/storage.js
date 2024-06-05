export function saveProject(projectClass) {
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.push({
        title: projectClass.title,
        tasks: projectClass.tasks
    });

    localStorage.setItem('projects', JSON.stringify(projects));
}

export function setActiveProject(index) {
    localStorage.setItem('activeProjectIdx', index);
}

export function getActiveProjectIndex() {
    return parseInt(localStorage.getItem('activeProjectIdx'), 10);
}

export function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    if (localStorage.getItem('activeProject') == index) {
        localStorage.removeItem('activeProject');
    }
}

export function deleteTask(projectIndex, taskIndex) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects[projectIndex].tasks.splice(taskIndex, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function updateProject(index) {

}

export function updateTask(projectIndex, taskIndex) {

}
