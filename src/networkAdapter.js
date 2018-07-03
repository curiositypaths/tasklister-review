const tasksBaseUrl = 'http://localhost:3000/tasks'
const listsBaseUrl = 'http://localhost:3000/lists'

const fetchLists = () => {
    return fetch(listsBaseUrl)
    .then(r => r.json())
    .then(listObjs => displayListFromServer(listObjs))
}

const fetchTasks = () => {
    return fetch(tasksBaseUrl)
    .then(r => r.json())
    .then(taskObjs => loadTasksFromServer(taskObjs))
}

const loadAndDisplayDataFromServer = () => {
    fetchTasks()
    .then(() => fetchLists() )
}

const persistList = title => {
    const postConfig = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ title: title})
    }
    return fetch(listsBaseUrl, postConfig).then(r => r.json()).then(listObj => {displayNewListFromServer(listObj)})
}

const persistTask = (description,priority,listId) => {
    const postConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: description, priority: priority, listId: listId})
    }
    return fetch(tasksBaseUrl, postConfig).then(r => r.json()).then(listObj => { displayNewTaskFromServer(listObj) })
}

const deleteTask = taskId => {
    return fetch(`${tasksBaseUrl}/${taskId}`,{method:'DELETE'})
}

const deleteList = listId => {
    return fetch(`${listsBaseUrl}/${listId}`, { method: 'DELETE' })
}