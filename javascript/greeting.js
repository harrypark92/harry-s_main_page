const loginForm = document.querySelector('#login-form'); // #id
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `${username}'s To Do List`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const loadedUsername = localStorage.getItem(USERNAME_KEY);
if (loadedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
} else {
    paintGreeting(loadedUsername);
}