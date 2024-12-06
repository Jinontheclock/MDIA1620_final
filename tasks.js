let taskManagement = {
    personal: 0,
    work: 0,
    urgent: 0,
    completed: 0,
    archived: 0,
}


//1)
function addTask(category) {
        taskManagement[category]++;
        console.log(`The task is adde on ${category}. Current ${category} count: ${taskManagement[category]}`);
    };
addTask("personal");


//2)
function showTasks(){
    console.log(`
        Personal: ${taskManagement.personal}
        Work: ${taskManagement.work}
        Urgent: ${taskManagement.urgent}
        Completed: ${taskManagement.completed}
        Archived: ${taskManagement.archived}`)
}
showTasks();


//3)
function calculator (){
    let total = taskManagement.personal + taskManagement.work + taskManagement.urgent + taskManagement.completed + taskManagement.archived;

    if (total < 5){
        console.log("light workload");
    } else if (5 === total || total < 15){
        console.log("moderate workload");
    } else if (15 === total || total < 25){
        console.log("heavy workload");
    } else if (25 === total || total > 25){
        console.log("overloaded");
    } 
}
calculator()