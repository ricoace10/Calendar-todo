let todos = []

function saveEvent() {
    let todoString = JSON.stringify(todos);
    localStorage.setItem('todos', todoString);
}

function loadEvent() {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
}

console.log(todos)
