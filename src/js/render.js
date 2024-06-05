import { setActiveProject, getActiveProjectIndex, deleteTask, deleteProject, updateProject, updateTask, saveProject} from './storage.js';
import { Project, Task } from './classes.js';

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
        projectDiv.innerHTML = `
        <p>${project.title}</p>
        <button class="update-btn project">update</button>
        <button class="delete-btn project">delete</button>
        `;
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

        projectDiv.querySelector('.delete-btn.project').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteProject(index);
            setActiveProject(-1);
            renderProjects();
        });

        projectDiv.querySelector('.update-btn.project').addEventListener('click', (e) => {
            e.stopPropagation();
            updateProject(index);
            renderProjects();
        });

        projectList.appendChild(projectDiv);
    });
    if (activeProject) {
        activeProject.tasks.forEach((task, taskIndex) => {
            const taskDiv = document.createElement('div');
            const currentTask = new Task(task.title, task.description, task.date, task.priority, task.status);
    
            if (currentTask.status) {
                taskDiv.classList.add('completed');
            }
            taskDiv.innerHTML = `
                <input type="checkbox" class="status-checkbox" ${currentTask.status ? 'checked' : ''}>
                <p>Task: ${currentTask.title}</p>
                <p>Description: ${currentTask.description}</p>
                <p>Priority: ${currentTask.priority}</p>
                <p>Date: ${currentTask.date}</p>
                <button class="update-btn task">update</button>
                <button class="delete-btn task">delete</button>
            `;
    
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



