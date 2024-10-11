"use strict";

//import modules
import {addTask, clearInput} from "./todo.js";
import {loadTasks, saveTask} from "./storage.js";

// import * as storage from "./storage.js";

//set up DOM references
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

//load tasks from local storage
const task = loadTasks();

task.array.forEach(element => {
    addTask(element, taskList);
});
//add event listener for new task
addTaskButton.addEventListener("click", () =>{
    const task = newTaskInput.value.trim();
    if(task) {
        addTask(task, taskList);
        taskList.push(task);
        saveTask(task);
        clearInput(newTaskInput);
    }

});