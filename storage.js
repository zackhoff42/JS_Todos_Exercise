const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];

for(let i = 0; i < todoStorage.length; i++){
    let todo = document.createElement('li');
    todo.innerText = todoStorage[i].text;
    todo.isCompleted = todoStorage[i].isCompleted;
    if(todo.isCompleted === true){
        todo.style.textDecoration = 'line-through';
    }
    todoList.appendChild(todo);
}

todoForm.addEventListener('submit', function(e){
    e.preventDefault();

    let todo = document.createElement('li');
    todo.innerText = document.querySelector('#text').value;
    todo.isCompleted = false;
    todoList.appendChild(todo);

    todoForm.reset();

    todoStorage.push({text: todo.innerText, isCompleted: false});
    localStorage.setItem('todos', JSON.stringify(todoStorage));
});

todoList.addEventListener('click', function(e){
    let selectedItem = e.target;

    if(selectedItem.isCompleted === false){
        selectedItem.style.textDecoration = 'line-through';
        selectedItem.isCompleted = true;
    } else {
        selectedItem.style.textDecoration = '';
        selectedItem.isCompleted = false;
    }

    for(i = 0; i < todoStorage.length; i++){
        if(todoStorage[i].text === selectedItem.innerText){
            todoStorage[i].isCompleted = !todoStorage[i].isCompleted;
            localStorage.setItem('todos', JSON.stringify(todoStorage));
        }
    }
});

//Got a little confused as to how to save the buttons from the first javascript so I used the solution as a reference to clean up this code. I walked through it and understand it. Also realized we weren't trying to save the buttons, just the li's and the state of the li's when I viewed the solution.