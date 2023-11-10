const statuses = {
    TODO : "To do",
    DONE : "Done",
    PROGRESS : "In Progress"
}

const {
    TODO, DONE, PROGRESS
   } = statuses

const list = {
    "create a new practice task" : "In Progress",
    "make a bed" : "Done",
    "write a post" : "To Do",
}

const changeStatus = (todo, status) => {
    if (todo in list) {
        list[todo] = status;
    }
    console.log(`Status modoficated ${status}`);
}
const addTask = (todo) => {
    if (todo in list) {
        return false;
    }
    return list[todo] = "To Do";
}
const deleteTask = (todo) => {
    return delete list[todo];
}
const showStatus = (flag, status) => {
    if (flag) {
        console.log(`${status}: `)
        for (const key in list) {
            if (list[key] === status) {
                console.log(key);
            }
        }
    } else {
        console.log(`${status}`);
        console.log("-")
    }
}

const showList2 = () => {
    for (const key in list) {
        console.log(`${key}: ${list[key]}`);
    }
}

const showList = () => {
    let isDone = false;
    let isToDo = false;
    let isProgress = false;

    for (const key in list) {
        if (list[key] === TODO) {
            isTodo = true;
        } else if (list[key] === DONE) {
            isDone = true;
        } else if (list[key] === PROGRESS) {
            isProgress = true;
        }
    }

    showStatus(isToDo, TODO);
    showStatus(isDone, DONE);
    showStatus(isProgress, PROGRESS);
}

changeStatus("create a new practice task", "To Do")
changeStatus("make a bed", "To Do")
changeStatus("write a post", "In Progress")
console.log("------------")

showList();
console.log("________________")

showList2();