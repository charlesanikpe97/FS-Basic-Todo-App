// Your Todo List App implementation will go here!

// grab the form - start from chrome dev tools to do this
const todoFormEl = document.querySelector("#todo-form");


const todoListEl = document.querySelector('#todo-list');
const inputEl = document.querySelector('#todo-input');
const buttonEl = document.querySelector('.add-btn');
const errorMessageDivEl = document.querySelector('#error-message');



// Adding the "Get started by adding a task you're yet to accomplish"

if (todoListEl.childElementCount === 0){
    const emptyTaskDivEl = document.createElement('div');
    emptyTaskDivEl.setAttribute('id', 'emptyTask');
    emptyTaskDivEl.textContent = "Get started by adding a task you're yet to accomplish";
    todoListEl.appendChild(emptyTaskDivEl);
}
