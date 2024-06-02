import { Task, Project } from './classes.js';

export function renderTasks() {
    const taskList = document.querySelector('.task-list')
    taskList.innerHTML = '';
}

export function renderProjects() {
    const projectList = document.querySelector('.project-list')
    projectList.innerHTML = '';
}

