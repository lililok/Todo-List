import { setActiveProject, getActiveProjectIndex, deleteTask, deleteProject, updateProject, updateTask} from './storage.js';
import { Task } from './classes.js';

import updateIcon from '../images/updateIcon.svg';
import deleteIcon from '../images/deleteIcon.svg';
import pineIcon from '../images/pineIcon.svg';

export function renderProjects() {
    const projectList = document.querySelector('.project-list')
    const taskList = document.querySelector('.task-list');

    projectList.innerHTML = "";
    taskList.innerHTML = "";

    const activeProjectIndex = getActiveProjectIndex();
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    const activeProject = projects[activeProjectIndex];

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `<p>${project.title}</p>`;

        if (!project.system) {
            const updateButton = document.createElement('img');
            updateButton.className = 'update-btn project';
            updateButton.src = updateIcon;
            projectDiv.appendChild(updateButton);

            const deleteButton = document.createElement('img');
            deleteButton.className = 'delete-btn project';
            deleteButton.src = deleteIcon;
            projectDiv.appendChild(deleteButton);

            projectDiv.querySelector('.delete-btn.project').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteProject(index);
                setActiveProject(0);
                renderProjects();
            });
    
            projectDiv.querySelector('.update-btn.project').addEventListener('click', (e) => {
                e.stopPropagation();
                updateProject(index);
                renderProjects();
            });
        }

        projectDiv.classList.add('project');
        if (index === activeProjectIndex) {
            projectDiv.classList.add('active');

            const activeProjectHeader = document.querySelector('.project-name');
            activeProjectHeader.innerHTML = project.title;
        }

        projectDiv.addEventListener('click', () => {
            setActiveProject(index);
            renderProjects();
        });

        projectList.appendChild(projectDiv);
    });
    if (activeProject) {
        activeProject.tasks.forEach((task, taskIndex) => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            const currentTask = new Task(task.title, task.description, task.date, task.priority, task.status);
    
            if (currentTask.status) {
                taskDiv.classList.add('completed');
            }
            taskDiv.innerHTML = `
                <input type="checkbox" class="status-checkbox" ${currentTask.status ? 'checked' : ''}>
                <div class="task-text">
                    <p id="task-title-text">${currentTask.title}</p>
                    <p id="task-description-text">${currentTask.description}</p>
                </div>
                <p id="task-priority-text">${currentTask.priority}</p>
                <p id="task-date-text">${currentTask.date}</p>
            `;

            const updateButton = document.createElement('img');
            updateButton.className = 'update-btn task';
            updateButton.src = updateIcon;
            taskDiv.appendChild(updateButton);

            const deleteButton = document.createElement('img');
            deleteButton.className = 'delete-btn task';
            deleteButton.src = deleteIcon;
            taskDiv.appendChild(deleteButton);
    
            taskDiv.querySelector('.delete-btn.task').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTask(activeProjectIndex, taskIndex);
                renderProjects();
            });
    
            taskDiv.querySelector('.update-btn.task').addEventListener('click', (e) => {
                e.stopPropagation();
                updateTask(activeProjectIndex, taskIndex);
                renderProjects();
            });
    
            taskDiv.querySelector('.status-checkbox').addEventListener('click', (e) => {
                e.stopPropagation();
                currentTask.statusSwitch();
                activeProject.tasks[taskIndex] = currentTask; 
                localStorage.setItem('projects', JSON.stringify(projects));
                renderProjects();
            });
    
            taskList.appendChild(taskDiv);
        });
    }
};

export function renderLogo() {
    const logoDiv = document.querySelector('.logo')
    const logoImg = document.createElement('img');
    logoImg.className = 'logo-img';
    logoImg.src = pineIcon;
    logoDiv.appendChild(logoImg);

}



