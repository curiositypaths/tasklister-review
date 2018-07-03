// List helper functions
let lists

const handleNewListCreation = () => {
  persistList(newListNameInput.value).then(() => newListNameInput.value = '')
}

const handleDeleteList = event => {
  const listId = event.target.dataset.listId
  deleteList(listId)
    .then(() => {
      lists = lists.filter(listObj => listObj.id !== parseInt(event.target.dataset.listId))
    })
    .then( () => {
      tasks = tasks.filter(taskObj => taskObj.listId !== parseInt(event.target.dataset.listId))
    } )
    .then(() => generateTaskListerHtml())
}

const displayListFromServer = listsObjs => {
  lists = listsObjs
  generateTaskListerHtml()
}

const displayNewListFromServer = listObj => {
  lists.push(listObj)
  generateTaskListerHtml()
}