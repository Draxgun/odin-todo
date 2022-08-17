let loadTaskSection = (content) => {
    createTaskContainer(content)
}

let createTaskContainer = (content) => {
    let taskContainer = document.createElement('div')
    taskContainer.classList.add('taskContainer')
    taskContainer.textContent ='asdas'

    content.appendChild(taskContainer)
}

export{
    loadTaskSection
}