const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addTask");
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
// // Add event listener to the form for Enter key press
// document.getElementById("todo-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Trigger a click event on the "Add" button
//     addButton.click();
// });

// // Add event listener to the "Add" button
// addButton.addEventListener("click", function () {
//     // Your addTask logic goes here
//     const taskText = inputBox.value;
    
//     if (taskText.trim() !== '') {
//         // Create and add the task to the list
//         const listContainer = document.getElementById("list-container");
//         const li = document.createElement("li");
//         li.textContent = taskText;
//         listContainer.appendChild(li);
        
//         // Clear the input field
//         inputBox.value = '';
//     }
// });

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();