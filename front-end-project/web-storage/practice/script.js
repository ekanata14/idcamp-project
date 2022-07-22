if(typeof(Storage) !== undefined){
    // alert("Your browser support local storage");
} else{
    // alert("Your browser doesn't support local storage");
}

const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    addTodo();
});

const todos = {};
const STORAGE_KEY = "TODOS_STORAGE"

function syncLocalStorage(activity, item, status = false){
    switch(activity){
        case "ADD":
        case "UPDATE":
            todos[item] = status;
            break;
        case "DELETE":
            break;
        default:
            break;
    }

    console.log(todos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

function addTodo(){
    const todo = document.getElementById("todo").value;
    console.log(todo);
    makeTodo(todo);
    syncLocalStorage("ADD", todo);
}

function done(element){
    let status = element.classList.toggle('done');
    console.log(status);
    syncLocalStorage("UPDATE", element.innerText, status);

}

function makeTodo(todo){
    let makeTodoElement = "<div><p>" + todo + "</p><button class='done' onclick = done(this)>Done</button><button class='delete' onclick = 'delete(this)'>Delete</button></div>"

    const todoContainer = document.querySelector(".container-todos");
    todoContainer.insertAdjacentHTML("afterbegin", makeTodoElement);
}
