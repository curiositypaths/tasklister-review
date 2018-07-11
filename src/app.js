// Html bindings
const htmlRoot = document.getElementById('app-content')
const newListNameInput = document.getElementById('new-list-title')

// Bootstrap app
const app = new TaskListerApp(List, Task, htmlRoot)
document.body.addEventListener('click', function(e) {
    if (e.target.dataset.action === 'create-new-list') {
        e.preventDefault()
        app.addNewList(newListNameInput.value)
    }

    if (e.target.dataset.action === 'create-new-task') {
        e.preventDefault()
        const newTaskParentListId = document.getElementById('parent-list').value
        const taskDescription = document.getElementById('new-task-description').value
        const taskPriority = document.getElementById('new-task-priority').value
        app.addNewTask(newTaskParentListId, taskDescription, taskPriority)
    }
})
//debugger