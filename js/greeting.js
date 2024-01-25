const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    // preventing the refreshing default
    event.preventDefault(); 

    // hide the form by adding hidden class
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    // ~ save the value in local storage
    localStorage.setItem(USERNAME_KEY, username); 

    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // browser is programmed to refresh when submit button is clicked
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

