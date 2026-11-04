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

// Saving the added Todos in POJOs

const todos = [

];


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
        const todoObj = {
            id: Date.now().toString(),
            text: todoTitleEl.textContent,
            completed: false,
            createdAt: Date.now()
        }
        todos.push(todoObj);
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

        if (todos.length > 0){
            todoListEl.firstElementChild.style.display = 'none';
        } 
    }
});


console.log(todos);



// Checkmark is active

todoListEl.addEventListener('change', (e) => {
    console.log(e);
    if (e.target.checked){
        e.target.parentElement.classList.add('completed');
        for (let todo of todos){
            if (todo.text === e.target.nextSibling.textContent){
                todo.completed = true;
            }
        }
    } else {
        e.target.parentElement.classList.remove('completed');
    }
})


// Delete functionality 

todoListEl.addEventListener('click', (e) => {
    
    if (e.target.className === 'delete-btn'){
        for (let i=0; i<todos.length; i++){
            if (todos[i].text === e.target.parentElement.previousElementSibling.textContent){
                todos.splice(i,1);
            }
        }

        console.log(todos);

        e.target.parentElement.parentElement.remove();
    }
});





