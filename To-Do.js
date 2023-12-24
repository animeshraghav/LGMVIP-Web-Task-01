let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

btn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "images/moon.png";
        btnText.innerHTML = "Dark";
    }else{
        btnIcon.src = "images/sun.png";
        btnText.innerHTML = "Light";
    } 
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addTask");
document.getElementById("todo-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    addButton.click();
});
addButton.addEventListener("click", function () {
    const taskText = inputBox.value;
    if (taskText.trim() !== '') {
        const li = document.createElement("li");
        li.textContent = taskText;
        const span = document.createElement("span");
        span.innerHTML = '\u00d7';
        span.addEventListener("click", function() {
            li.remove();
            saveData(); 
        });
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();
    }
});
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= '\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data1", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = '';
    listContainer.innerHTML = localStorage.getItem("data1");
}
showTask();