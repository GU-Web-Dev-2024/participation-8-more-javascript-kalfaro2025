"use strict";

// function to add a task
function addTask(task, taskList){
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

//function to clear input field
function clearInput(inputField){
    inputField.value = "";
}

//alternate method export
export function sayHello(){
    alert("Hello, World!");
}
//exporting functions
export {addTask, clearInput};   