const List = (function (listStore) {
    let listId = 0
    return class List {
        constructor(name) {
            this.name = name
            this.id = ++listId
            listStore.push(this)
        }

        ownTasks() {
            return Task.all().filter(taskObj => taskObj.parentListId === this.id)
        }

        ownTasksHTML() {
            return this.ownTasks().map(taskObj => taskObj.toHTML()).join('')
        }

        toHTML() {
            return `
                    <div>
                        <h2>${this.name}
                        <button data-action="delete-list" data-list-id="${this.id}" data-title="${this.name}" class="delete-list">
                            X
                        </button>
                        </h2>
                        <ul>
                            ${this.ownTasksHTML()}
                        </ul>
                    </div>
                    `
        }

        static all() {
            return [...listStore]
        }
    }
})([])