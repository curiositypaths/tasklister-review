const Task = (function (taskStore) {
    let taskId = 0
    return class Task {
        constructor(parentListId, description, priority) {
            this.id = ++taskId
            this.parentListId = parseInt(parentListId)
            this.description = description
            this.priority = priority
            taskStore.push(this)
        }

        toHTML() {
            return `
                    <li>
                    Task: ${this.description}
                    <button data-action='delete-task' data-task-id='${this.id}' data-list-id="${this.parentListId}" data-task-name="${this.description}" class="delete-task">
                        X
                    </button>
                    <br>
                    Priority: ${this.priority}
                    </li>
                `
        }

        static all() {
            return [...taskStore]
        }
    }
})([])