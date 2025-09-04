function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.className = "update-btn";
    updateBtn.addEventListener("click", () => {
        taskInput.value = taskText;
        li.remove();
    });

    li.appendChild(deleteBtn);
    li.appendChild(updateBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}