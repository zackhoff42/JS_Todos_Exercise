const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');

todoForm.addEventListener('submit', function(e){
    e.preventDefault();

    let todo = document.createElement('li');
    todo.innerText = document.querySelector('#text').value;

    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove Todo';

    todoList.appendChild(todo);
    todo.appendChild(removeBtn);

    todoForm.reset();
});

todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    } else if(e.target.tagName === 'LI'){
        e.target.style.textDecoration = 'line-through';
    }
});