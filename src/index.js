import './style.css';
import "./js/forms.js";
import { renderProjects, renderLogo } from './js/render.js';
import { setActiveProject } from './js/storage.js';
import { Project } from './js/classes.js';

document.addEventListener('DOMContentLoaded', () => {
    createDefaultProject();
    renderProjects();
    renderLogo();
});

function createDefaultProject() {
    const defaultProject = new Project ("Default", true);
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    setActiveProject(0);
    
    const defaultExist = projects.some(project => project.title === "Default");

    if (!defaultExist) {
        projects.unshift(defaultProject);
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}
