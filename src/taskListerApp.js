class TaskListerApp {
    constructor(listClass, taskClass, htmlRoot) {
        this.listClass = listClass
        this.taskClass = taskClass
        this.htmlRoot = htmlRoot
        this.render()
    }

    addNewList(name) {
        new this.listClass(name)
        newListNameInput.value = ''
        this.render()
    }

    generateAppHTMLRepresentation() {
        return `${this.newTaskForm()} ${this.listsToHTML()}`
    }

    newTaskForm() {
        if (this.listClass.all().length) {
            return `
                    <form id="create-task-form">
                    <label for="parent-list">Select List:</label>
                    <select id="parent-list">
                    ${this.generateOptionsHTML()}
                    </select>

                        <label for="new-task-description">Task description:</label>
                        <input required="" type="text" id="new-task-description" placeholder="description">

                        <label for="new-task-priority">Priority level:</label>
                        <input type="text" id="new-task-priority" placeholder="priority">
                        <input data-action='create-new-task' data-one-two-three='one' type="submit" value="Create New Task">
                    </form>
                    `
        } else {
            return ''
        }
    }

    generateOptionsHTML() {
        return `${this.listClass.all().map(listObj => `<option value="${listObj.id}" selected="">${listObj.name}</option >`).join('')}`
    }

    listsToHTML() {
        return `<div id="lists">${this.listClass.all().map(listObj => listObj.toHTML())}</div>`
    }

    addNewTask(parentListId, description, priority) {
        new this.taskClass(parentListId, description, priority)
        this.render()
    }

    render() {
        this.htmlRoot.innerHTML = this.generateAppHTMLRepresentation()
    }
}