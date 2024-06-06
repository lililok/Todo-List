import { projectForm, taskForm } from './forms.js'
import { renderProjects } from './render.js';

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
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const project = projects[index];
    const form = projectForm(project.title);
    var projectFormContainer = document.querySelector(".project-form-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        project.title = document.getElementById("project-name").value;
        localStorage.setItem('projects', JSON.stringify(projects));

        form.reset();
        projectFormContainer.innerHTML = ''; 
        renderProjects();
    });
}

export function updateTask(projectIndex, taskIndex) {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const task = projects[projectIndex].tasks[taskIndex];
    const form = taskForm(task.title, task.description, task.priority, task.date);
    var taskFormContainer = document.querySelector(".task-form-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        task.title = document.getElementById("task-name").value;
        task.description = document.getElementById("task-description").value;
        task.priority = document.getElementById("task-priority").value;
        task.date = document.getElementById("task-date").value;

        localStorage.setItem('projects', JSON.stringify(projects));

        form.reset();
        taskFormContainer.innerHTML = ''; 
        renderProjects();
    });
}
