import {capitalizeFirstLetter} from './capitalize'
import {createModalStructure} from './modal'
 
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
    addFunction()
}

let addFunction = () => {
    let button = document.getElementById('addButton')
    button.addEventListener('click',() =>{
        createModalStructure()
    })
}

export{
    loadSidebar
}

