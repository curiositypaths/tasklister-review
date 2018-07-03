// Task helper functions
let tasks

const createTask = (description, priority, listName) => {
  const listObj = lists.find(listObj => listObj.title === listName)
  persistTask(description, priority, listObj.id).then()
}

const handleNewTaskCreation = event => {
  const taskDescription = document.getElementById('new-task-description').value
  const taskPriority = document.getElementById('new-task-priority').value
  const newTaskParentListName = document.getElementById('parent-list').value
  createTask(taskDescription, taskPriority, newTaskParentListName)
  generateTaskListerHtml()
}

const handleDeleteTask = event => {
  const taskId = event.target.dataset.taskId
  deleteTask(taskId)
  .then( () => {
    tasks = tasks.filter(taskObj => taskObj.id !== parseInt(event.target.dataset.taskId))
  } )
  .then(() => generateTaskListerHtml())
}

const loadTasksFromServer = taskObjs => tasks = taskObjs
const loadTaskFromServer = taskObj => {
  tasks.push(taskObj);
  generateTaskListerHtml()
}

const displayNewTaskFromServer = taskObj => {
  tasks.push(taskObj)
  generateTaskListerHtml()
}