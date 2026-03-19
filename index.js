const ul = document.getElementById("users-list");
const inputElement = document.getElementById("sendUser");
const buttonElement = document.getElementById("submitUser")
let emptyMessage = document.createElement("li");
emptyMessage.textContent = "Lista vazia.";
isListEmpty()

inputElement.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        addUsers();
    }
})

function isListEmpty(){
    message = document.createElement("li")
    if (ul.children.length === 0){
        ul.appendChild(emptyMessage);
    }
    else{
        if (ul.contains(emptyMessage)){
            ul.removeChild(emptyMessage);
        }
    }
}

function addUsers(){
    let inputValue = inputElement.value;
    let items = ul.getElementsByTagName("li")

    if (inputValue == "" || inputValue == null || inputValue == undefined){
        alert("O campo não pode ser vazio.")
        return;
    }

    for (let item of items){
        if (item.firstChild.textContent === inputValue){
            alert("Usuário já existe.")
            return;
        }
    }

    let li = document.createElement('li');
    li.textContent = inputValue;
    ul.appendChild(li);

    let buttonRemove = document.createElement('button')
    li.append(buttonRemove);
    buttonRemove.textContent = "Remover usuário"
    buttonRemove.addEventListener("click", function(){
        li.remove()
        isListEmpty();
    })
 
    inputElement.value = "";
    isListEmpty();
}


