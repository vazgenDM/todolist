const taskContainer = document.querySelector('.tasks')
const addTask = document.querySelector('#addTask')
const addTaskButton = document.querySelector('.addTaskButton')





function deleteTaskButton() {
    let deleteTask = document.createElement('button')
    deleteTask.innerText = 'delete the task'
    deleteTask.classList.add('deleteTask')
    return deleteTask
}

// function warning() {
   
//     return warning
// }


let taskSection
let task
let checkmark

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.parentElement.lastChild.tagName === 'P') {
        e.target.parentElement.lastChild.remove()
    }

    if(addTask.value.trim() === '') {

        let warningMessage = 'Field cannot be empty'
        let warning = document.createElement('p')
        warning.innerText = warningMessage
        warning.classList.add('warningMessage')
        warning.style.color = 'red'
        e.target.parentElement.appendChild(warning)
        return false
    }
    taskSection = document.createElement('section')
    task = document.createElement('p')
    checkmark = document.createElement('input')
    deleteButton = deleteTaskButton()

    task.innerText = addTask.value
    checkmark.setAttribute('type', 'checkbox')
   
    

    taskSection.appendChild(task).style.display = 'inline-block'
    taskSection.appendChild(checkmark).style.margin = '0 15px'
    taskSection.appendChild(deleteButton)
    taskSection.classList.add('taskSection')

    taskContainer.appendChild(taskSection)

    
    addTask.value = ''
})



const deleteTask = document.querySelector('.deleteTask')


taskContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteTask')) {
        e.target.parentElement.remove()
    }

})