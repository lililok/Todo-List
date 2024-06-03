var openBtnProjects = document.getElementById("projects");
var openBtnTasks = document.getElementById("tasks");
var projectFormContainer = document.querySelector(".project-form-container");
var taskFormContainer = document.querySelector(".task-form-container");

openBtnProjects.addEventListener("click", function() {
    projectFormContainer.innerHTML = '';

    var form = document.createElement("form");
    form.id = "project-form";
    
    var label = document.createElement("label");
    label.setAttribute("for", "project-name");
    label.textContent = "Project name:";
    
    var input = document.createElement("input");
    input.type = "text";
    input.id = "project-name";
    input.name = "project-name";
    input.required = true;

    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Ok";
    
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submitButton);
    
    projectFormContainer.appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var projectName = document.getElementById("project-name").value;
        form.reset();
        projectFormContainer.removeChild(form);
    });
});

openBtnTasks.addEventListener("click", function() {
    taskFormContainer.innerHTML = '';

    var dialog = document.createElement("dialog");

    var form = document.createElement("form");
    form.id = "task-form";
    
    var labelName = document.createElement("label");
    labelName.setAttribute("for", "task-name");
    labelName.textContent = "Task info:";
    
    var inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "task-name";
    inputName.name = "task-name";
    inputName.placeholder = "Title";
    inputName.required = true;
    
    var inputDescription = document.createElement("input");
    inputDescription.type = "text";
    inputDescription.id = "task-description";
    inputDescription.name = "task-description";
    inputDescription.placeholder = "Description (optional)";

    var labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "task-priority");
    labelPriority.textContent = "Priority:";
    
    var selectPriority = document.createElement("select");
    selectPriority.id = "task-priority";
    selectPriority.name = "task-priority";

    var option1 = document.createElement("option");
    option1.value = "1";
    option1.textContent = "Low";
    selectPriority.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "2";
    option2.textContent = "Medium";
    selectPriority.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "3";
    option3.textContent = "High";
    selectPriority.appendChild(option3);

    var labelDate = document.createElement("label");
    labelDate.setAttribute("for", "task-date");
    labelDate.textContent = "Due date:";

    var inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "task-date";
    inputDate.name = "task-date";
    inputDate.required = true;

    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Ok";
    
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

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var taskName = document.getElementById("task-name").value;
        form.reset();
        dialog.close();
        taskFormContainer.removeChild(dialog);
    });
});