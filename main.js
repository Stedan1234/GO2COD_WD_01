const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// creating to lists
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page from refreshing when form is submitted
    const task = todoInput.value.trim(); // retrieves value from the todo input field thus .value and removes any leading or trailing spaces using .trim.

    if (task) {
        addTask(task); // calling function to add task
        todoInput.value = ''; //to clear input field after adding 
    } else {
        alert('Please enter a valid task.'); //to validate input
    }
});

// function to add new task to the list
function addTask(task) {
    const li = document.createElement('li'); // to create new <li> element in css and assigns it to li variable
    li.innerHTML = `    
    <span>${task}</span> 
    <div>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    </div>
`;      //the task texts will wrapped in the span tag
    todoList.appendChild(li); // Append the new task to the list
}

// function to edit a task
function editTask(button) {
    const task = button.parentElement.previousElementSibling; //button.parent gets parent <div> of the button and previousElementSibling selects span element just before the parent element
    const newTask = prompt('Edit your task:', task.textContent); // to open dialogue for user to edit task 
//retrieves span containing task

if (newTask && newTask.trim() !== ''){
    task.textContent = newTask.trim(); // updates <span> with editted task
    } else {
    alert('Task cannot be empty.');
    }
}

//delete function
function deleteTask(button) {
    button.parentElement.parentElement.remove(); //removes particular li element
}