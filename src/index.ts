import { v4 as uuidV4 } from 'uuid'
// console.log(uuidV4());
// CUSTOM TYPE 
type Task = {
    id: string 
    title: string
    completed: boolean
    createdAt: Date
}

// SPECIFY LIST TYPE FURTHER ie. LIST = HTML UL LIST ELEMENT
const list = document.querySelector<HTMLUListElement>("#list")
// SPECIFY FORM TYPE FURTHER ie. FORM = HTML FORM ELEMENT
const form = document.getElementById("new-task-form") as HTMLFormElement
// SPECIFY INPUT TYPE FURTHER ie. TITLE = HTML INPUT ELEMENT
const input = document.querySelector<HTMLInputElement>("#new-task-title")

// CREATE EVENT LISTENER FOR FORM
form.addEventListener("submit", e => {
    e.preventDefault()
    // TO MAKE SURE INPUT HAS VALUE:
    // OPTIONAL CHAINING: IF INPUT WITH ID EXISTS RETURN VALUE IF IT DOES'NT RETURN UNDEFINED
    if(input?.value == "" || input?.value == null) return 
    // IF STATEMENT ENSURE INPUT EXISTS AS INPUT CANNOT BE NULL OR EMPTY STRING 
    
    const newTask: Task = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }

    addListItem(newTask)
    // CLEAR INPUT LABEL AFTER LIST ITEM ADDED
    input.value = ""
})


function addListItem(task: Task ){
    const item = document.createElement("li")
    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed

    label.append(checkbox, task.title)
    item.append(label)
    list?.append(item)
}