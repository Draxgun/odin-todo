import {capitalizeFirstLetter} from './capitalize'
import {createModalStructure,createTaskModal} from './modal'
 
/* Creates the side bar*/
let loadSidebar= (content) => {
    let sidebarContainer = createSidebarContainer(content)


    
    createSidebar(sidebarContainer)
    addButtonListeners()
}

let createSidebarContainer = (content) => {
    let sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebarContainer')

    content.appendChild(sidebarContainer)

    return sidebarContainer
}

let createSidebar = (container) => {
    
    let itemNames = ['home','today','week','month','projects','add']

    itemNames.forEach(item => {
        createSidebarItem(item,container)
    });


}


let createSidebarItem = (name,container) =>{
    
    let button = document.createElement('button')
    button.textContent = capitalizeFirstLetter(name)
    button.setAttribute('id',`${name}Button`)
    button.classList.add(`sidebarButton`)

    container.appendChild(button)

}

let addButtonListeners = () => {
    addTaskButton()
}

let addTaskButton = () => {

    let addButton = document.getElementById('addButton')
    let taskContent = createTaskModal()
    createModalStructure(taskContent,'task','Add a task',addButton)


}

export{
    loadSidebar
}

