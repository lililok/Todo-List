import { setActiveProject } from './storage.js';

export function renderProjects() {
    const projectList = document.querySelector('.project-list')
    projectList.innerHTML = "";

    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<a>${project.title}</a>`;
        projectDiv.addEventListener('click', () => {
            setActiveProject(project.title);
            renderProjects();
        });
        
        /*project.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.innerHTML = `
                <p>Task: ${task.name}</p>
                <p>Description: ${task.description}</p>
                <p>Priority: ${task.priority}</p>
                <p>Date: ${task.date}</p>
                <p>Status: ${task.status}</p>
            `;
            projectDiv.appendChild(taskDiv);
        });*/
        projectList.appendChild(projectDiv);
    });
}


