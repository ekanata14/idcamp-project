document.addEventListener("DOMContentLoaded", function(){
    const todos = [];
    const RENDER_EVENT = 'render-todo';

    const submitForm = document.getElementById("form");
    submitForm.addEventListener("submit", function(event){
        event.preventDefault()
        addTodo();
    });

    // Fungsi untuk menambahkan todo
    function addTodo(){
        const textTodo = document.getElementById("title").value;
        const timestamp = document.getElementById("date").value;

        const generatedID = generateId();
        const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
        todos.push(todoObject);

        document.dispatchEvent(new Event(RENDER_EVENT));
        saveData();
    }
    
    // Fungsi untuk membuat ID unik
    function generateId(){
        return +new Date();
    }
    
    // Fungsi untuk membuat todo object
    function generateTodoObject(id, task, timestamp, isCompleted){
        return {id, task, timestamp, isCompleted};
    }

    // Fungsi untuk mencari todo
    function findTodo(todoId){
        for(const todoItem of todos){
            if(todoItem.id === todoId){
                return todoItem;
            }
        }
        return null;
    }

    // Fungsi untuk mencari angka index todo
    function findTodoIndex(todoId){
        for(const index in todos){
            if(todos[index].id === todoId){
                return index;
            }  
        }

        return -1;
    }

    // FUngsi untuk membuat todo agar bisa tampil di HTML
    function makeTodo(todoObject){
        const textTitle = document.createElement("h2");
        textTitle.innerText = todoObject.task;

        const textTimestamp = document.createElement("p");
        textTimestamp.innerText = todoObject.timestamp;

        const textContainer = document.createElement("div");
        textContainer.classList.add('inner');
        textContainer.append(textTitle, textTimestamp);

        const container = document.createElement("div");
        container.classList.add("item", "shadow");
        container.append(textContainer);
        container.setAttribute("id", "todo-${todoObject.id}");

        if(todoObject.isCompleted){
            const undoButton = document.createElement("button");
            undoButton.classList.add("undo-button");

            undoButton.addEventListener("click", function(){
                undoTaskFromCompleted(todoObject.id);
            });
            

            const trashButton = document.createElement("button");
            trashButton.classList.add("trash-button");

            trashButton.addEventListener("click", function(){
                removeTaskFromCompleted(todoObject.id);                
            });

            container.append(undoButton, trashButton);
        } else {
            const checkButton = document.createElement("button");
            checkButton.classList.add("check-button");

            checkButton.addEventListener("click", function(){
                addTaskToCompleted(todoObject.id);
            });

            container.append(checkButton);
        }
        return container;
    }
    
    // Fungsi untuk menambahkan todo ke tempat yang sudah selesai
    function addTaskToCompleted(todoId){
        const todoTarget= findTodo(todoId);

        if(todoTarget == null) return;

        todoTarget.isCompleted = true;
        document.dispatchEvent(new Event(RENDER_EVENT));

        saveData();
    }

    // Fungsi untuk menghapus todo
    function removeTaskFromCompleted(todoId){
        const todoTarget = findTodoIndex(todoId);

        if(todoTarget == -1) return;

        todos.splice(todoTarget, 1);
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveData();
    }

    // Fungsi untuk mengembalikan todo ke tempat yang harus dilakukan
    function undoTaskFromCompleted(todoId){
        const todoTarget = findTodo(todoId);

        if(todoTarget == null) return;
        todoTarget.isCompleted = false;
        document.dispatchEvent(new Event(RENDER_EVENT));;
        saveData();
    }

    // Listener untuk merender todo
    document.addEventListener(RENDER_EVENT, function(){
        // console.log(todos);

        const uncompletedTODOList = document.getElementById("todos");
        uncompletedTODOList.innerHTML = "";

        const completedTODOList = document.getElementById("completed-todos");
        completedTODOList.innerHTML = "";

        for(const todoItem of todos){
            const todoElement = makeTodo(todoItem);
            if(!todoItem.isCompleted){
                uncompletedTODOList.append(todoElement);
            } else{
                completedTODOList.append(todoElement);
            }
        }
    });

    // Fungsi untuk save data
    function saveData(){
        if(isStorageExist()){
            // loadDataFromStorage();
            const parsed = JSON.stringify(todos);
            localStorage.setItem(STORAGE_KEY, parsed);
            document.dispatchEvent(new Event(SAVED_EVENT));
        }
    }

    const SAVED_EVENT = 'saved-todo';
    const STORAGE_KEY = 'TODO_APPS';

    // Fungsi untuk mengecek apakah browser mendukung web storage
    function isStorageExist(){
        if(typeof(Storage) === "undefined"){
            alert("Browser tidak mendukung web storage");
            return false;
        } else{
            return true;
        }
    }
    
    // Custom Event untuk mengetahui perubahan data
    document.addEventListener(SAVED_EVENT, function(){
        alert(localStorage.getItem(STORAGE_KEY));
    });

    // Fungsi untuk mengambil data dari local storage untuk ditampilkan pada tampilan
    function loadDataFromStorage(){
        const serializedData = localStorage.getItem(STORAGE_KEY);
        let data = JSON.parse(serializedData);

        if(data !== null){
            for(const todo of data){
                todos.push(todo);
            }
        }
        document.dispatchEvent(new Event(RENDER_EVENT));
    }

    if(isStorageExist()){
        loadDataFromStorage();
    }

});