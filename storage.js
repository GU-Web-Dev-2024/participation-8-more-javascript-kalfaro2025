"use strict";

//function to save task to local storage
function saveTask(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
//function to load task from local storage
function loadTasks(){
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}
//exports
export {saveTask, loadTasks};