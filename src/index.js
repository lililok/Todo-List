import './style.css';
import "./js/forms.js";
import { renderProjects } from './js/render.js';
import { saveProject, setActiveProject } from './js/storage.js';
import { Project } from './js/classes.js';

document.addEventListener('DOMContentLoaded', () => {
    //createDefaultProject()
    renderProjects();
});

/*function createDefaultProject() {
    const defaultProjectExists = projects.some(project => project.name === 'default');

    if (!defaultProjectExists) {
        const defaultProject = new Project('default');
        saveProject(defaultProject);
        setActiveProject(-1);
    } else {
        const defaultProjectIndex = projects.findIndex(project => project.name === 'default');
        setActiveProject(defaultProjectIndex);
    }
}*/

