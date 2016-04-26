function maxTasks(obj) {
    var name;
    var tasks = 0;

    for (var key in obj) {
        if(obj[key] > tasks) {
            tasks = obj[key];
            name = key;
        }
    }
    return name + " has done " +  tasks + " tasks. It's the best result. Good job!";
}

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

console.log(tasksCompleted);
console.log(maxTasks(tasksCompleted));

