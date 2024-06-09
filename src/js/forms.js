import { saveProject, setActiveProject, getActiveProjectIndex } from './storage.js';
import { Task, Project } from './classes.js';
import { renderProjects } from './render.js';

var openBtnProjects = document.querySelector("#projects");
var openBtnTasks = document.querySelector("#tasks");
var projectFormContainer = document.querySelector(".project-form-container");
var taskFormContainer = document.querySelector(".task-form-container");

openBtnProjects.addEventListener("click", function() {
    const form = projectForm();

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var projectName = document.getElementById("project-name").value;

        const projectClass = new Project(projectName);
        saveProject(projectClass);

        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        setActiveProject(projects.length - 1);

        form.reset();
        projectFormContainer.innerHTML = '';
        renderProjects();
    });
});

openBtnTasks.addEventListener("click", function() {
    const form = taskForm();

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var taskName = document.getElementById("task-name").value;
        var taskDescription = document.getElementById("task-description").value;
        var taskPriority = document.getElementById("task-priority").value;
        var taskDate = document.getElementById("task-date").value;

        const taskClass = new Task(taskName, taskDescription, taskDate, taskPriority);
        const activeProjectIndex = getActiveProjectIndex();
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        const activeProject = projects[activeProjectIndex];
        activeProject.tasks.push(taskClass);
        localStorage.setItem('projects', JSON.stringify(projects));
        form.reset();
        taskFormContainer.innerHTML = '';
        renderProjects();
    });
});

export function taskForm(title = '', description = '', priority = 'Low', date = '') {
    taskFormContainer.innerHTML = '';

    var dialog = document.createElement("dialog");
    dialog.id = "task-dialog";

    var form = document.createElement("form");
    form.id = "task-form";

    var closeButton = document.createElement("button");
    closeButton.className = 'close-button';
    closeButton.id = "task";
    closeButton.textContent = "⨯";

    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        form.reset();
        dialog.close();
        taskFormContainer.removeChild(dialog);
    });
    
    var labelName = document.createElement("label");
    labelName.setAttribute("for", "task-name");
    labelName.textContent = "Task info:";
    
    var inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "task-name";
    inputName.name = "task-name";
    inputName.placeholder = "Title";
    inputName.required = true;
    inputName.value = title;
    inputName.setAttribute('maxlength', '60');
    
    var inputDescription = document.createElement("input");
    inputDescription.type = "text";
    inputDescription.id = "task-description";
    inputDescription.name = "task-description";
    inputDescription.placeholder = "Description (optional)";
    inputDescription.value = description;
    inputDescription.setAttribute('maxlength', '90');

    var labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "task-priority");
    labelPriority.textContent = "Priority:";
    
    var selectPriority = document.createElement("select");
    selectPriority.id = "task-priority";
    selectPriority.name = "task-priority";
    

    var option1 = document.createElement("option");
    option1.value = "Low";
    option1.textContent = "Low";
    selectPriority.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Medium";
    option2.textContent = "Medium";
    selectPriority.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "High";
    option3.textContent = "High";
    selectPriority.appendChild(option3);

    selectPriority.value = priority;

    var labelDate = document.createElement("label");
    labelDate.setAttribute("for", "task-date");
    labelDate.textContent = "Due date:";

    var inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "task-date";
    inputDate.name = "task-date";
    inputDate.required = true;
    inputDate.value = date;

    var submitButton = document.createElement("button");
    submitButton.className = 'submit-button';
    submitButton.id = "task";
    submitButton.type = "submit";
    submitButton.textContent = "submit";
    
    form.appendChild(closeButton);

    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(inputDescription);

    form.appendChild(labelPriority);
    form.appendChild(selectPriority);

    form.appendChild(labelDate);
    form.appendChild(inputDate);

    form.appendChild(submitButton);

    dialog.appendChild(form);
    
    taskFormContainer.appendChild(dialog);

    dialog.showModal();

    return form;
}

export function projectForm(title = '') {
    projectFormContainer.innerHTML = '';

    var dialog = document.createElement("dialog");
    dialog.id = "project-dialog";

    var form = document.createElement("form");
    form.id = "project-form";
    
    var label = document.createElement("label");
    label.setAttribute("for", "project-name");
    label.textContent = "Project title:";

    const inputProject = document.createElement('div');
    inputProject.className = 'input-project';
    
    var input = document.createElement("input");
    input.type = "text";
    input.id = "project-name";
    input.name = "project-name";
    input.required = true;
    input.value = title;
    input.setAttribute('maxlength', '30');

    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = 'submit-button';
    submitButton.id = "project";
    submitButton.textContent = "ok";

    var closeButton = document.createElement("button");
    closeButton.className = 'close-button';
    closeButton.id = "project";
    closeButton.textContent = "cancel";

    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        form.reset();
        projectFormContainer.innerHTML = '';
    });
    
    form.appendChild(label);
    inputProject.appendChild(input);
    inputProject.appendChild(closeButton);
    inputProject.appendChild(submitButton);
    form.appendChild(inputProject);

    dialog.appendChild(form);
    
    projectFormContainer.appendChild(dialog);

    dialog.showModal();

    return form;
}