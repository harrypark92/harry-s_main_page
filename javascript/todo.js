const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = document.querySelector('#todo-form input');
let toDos = [];
const TODOS_KEY = 'todos'

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(ToDoObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = ToDoObj.text;
    li.id = ToDoObj.id;
    const button = document.createElement('button');
    button.innerText = '✔';
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const ToDoObj = {
        id:Date.now(),
        text:newToDo
    };
    toDos.push(ToDoObj);
    paintToDo(ToDoObj);
    saveToDo();
};

toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null ) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}