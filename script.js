// Your Todo List App implementation will go here!



// grab the form - start from chrome dev tools to do this
const todoFormEl = document.querySelector("#todo-form");


const todoListEl = document.querySelector('#todo-list');
todoListEl.classList.add('todo-list');
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


// Adding a todo 


buttonEl.addEventListener('click', (e)=> {
    e.preventDefault();
    if (inputEl.value.length < 3){
        errorMessageDivEl.textContent = "Your to-do action must be at least 3 characters long."
        errorMessageDivEl.classList.add('show');
    } else {
        e.preventDefault(); // Stop Page from refreshing
        errorMessageDivEl.classList.remove('show'); // Remove the error message displayed in red if present.
        
        
        // Creating and assigning attributes to the Todos items
        const toDoDivEl = document.createElement('li');
        toDoDivEl.setAttribute('class', 'todo-item');
        
        
        const checkboxEl = document.createElement('input');
        checkboxEl.setAttribute('type', 'checkbox');
        checkboxEl.classList.add('todo-checkbox');
        toDoDivEl.appendChild(checkboxEl);

        const todoTitleEl = document.createElement('span');
        todoTitleEl.textContent = inputEl.value;
        todoTitleEl.classList.add('todo-text');
        toDoDivEl.appendChild(todoTitleEl);

        const deleteBtnDivEl = document.createElement('div');
        deleteBtnDivEl.classList.add('todo-actions');
        toDoDivEl.appendChild(deleteBtnDivEl);
       
        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.innerText = "Delete";
        deleteBtnEl.classList.add('delete-btn')
        deleteBtnDivEl.appendChild(deleteBtnEl);
        

        todoListEl.appendChild(toDoDivEl)




        inputEl.value = "";
    }
});


// Checkmark is active

todoListEl.addEventListener('change', (e) => {
    console.log(e);
    if (e.target.checked){
        e.target.parentElement.classList.add('completed');
    }
})


// Delete functionality 

todoListEl.addEventListener('click', (e) => {
    
    if (e.target.className === 'delete-btn'){
        console.log("This worked.");
        e.target.parentElement.parentElement.remove();
    }
})
