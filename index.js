document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteButton">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            addDeleteButtonListener(taskItem);
        }
    });

   function addDeleteButtonListener(taskItem) {
        const deleteButton = taskItem.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });
    }
});