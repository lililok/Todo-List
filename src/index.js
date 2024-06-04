import './style.css';
import './js/forms.js'
import { renderProjects } from './js/render.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});


// task form should generate in active project scope and data send to task array
