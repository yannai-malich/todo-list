// Retrieve tasks from Local Storage if available
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Display tasks on the page
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        if (task.includes('DONE: ')) {
            listItem.classList.add('completed');
        }
        listItem.onclick = () => toggleTask(index);
        taskList.appendChild(listItem);
    });
}

// Add new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        displayTasks();
    }
}

// Toggle task completion
function toggleTask(index) {
    tasks[index] = tasks[index].includes('DONE: ') ? tasks[index].replace('DONE: ', '') : 'DONE: ' + tasks[index];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Delete completed tasks
function deleteCompletedTasks() {
    tasks = tasks.filter(task => !task.includes('DONE: '));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Initial display of tasks
displayTasks();
// fsgdvsf
