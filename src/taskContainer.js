let loadTaskSection = (content) => {
    let main = createTaskSection()
    createTaskContainer(main)
    createFooter(main)
    content.appendChild(main)
}

let createTaskSection = () => {
    let taskSectionContainer = document.createElement('div')
    taskSectionContainer.classList.add('taskSectionContainer')

    return taskSectionContainer
}

let createTaskContainer = (taskSectionContainer) => {
    let tasksContainer = document.createElement('div')
    tasksContainer.classList.add('taskContainer')

    taskSectionContainer.appendChild(tasksContainer)
}

let createFooter = (taskSectionContainer) => {
    let footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent = 'A project by Alejandro Banuelos'
    taskSectionContainer.appendChild(footer)
}


export{
    loadTaskSection
}