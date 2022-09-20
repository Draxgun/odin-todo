import {capitalizeFirstLetter} from './capitalize'
import {createModalStructure,createTaskModal} from './modal'
import {Project,Task,mainDatabase} from './mainObjects'
import { createDomElement } from './domCreators'
import {addProjectContentStructure} from './mainProjectDisplay'
 
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

let addToday = () => {
    let todayButton = document.getElementById('todayButton')

    todayButton.addEventListener('click',()=>{
        mainDatabase.getTodaysTasks()
    })
}

let addMonth = () => {
    let monthButton = document.getElementById('monthButton')

    monthButton.addEventListener('click',()=>{
        mainDatabase.getMonthTasks()
    })
}

let addHome = () => {
    let homeButton = document.getElementById('homeButton')

    homeButton.addEventListener('click',()=>{
        console.log(mainDatabase.getTasks())
    })
}

let createSidebarItem = (name,container) =>{
    
    let button = document.createElement('button')
    button.textContent = capitalizeFirstLetter(name)
    button.setAttribute('id',`${name}Button`)
    button.classList.add(`sidebarButton`)

    container.appendChild(button)

}


let addButtonListeners = () => {
    addTaskButton();
    addProjectButton();
    addToday();
    addMonth();
    addHome();
}

let addTaskButton = () => {

    let addButton = document.getElementById('addButton');
    let taskContent = createTaskModal();
    createModalStructure(taskContent,'task','Add a...',addButton);


}

let addProjectButton = () => {
    let addButton = document.getElementById('projectsButton')
    let content = loadProjectCollapsible()
    addButton.addEventListener('click',()=>{
        if (content.style.display === "flex") {
            content.style.display = "none";
          } else {
            content.style.display = "flex";
          }
    })
    
}


let loadProjectCollapsible = () => {
    
    let addButton = document.getElementById('projectsButton')
    let projectTitles = mainDatabase.getProjectsTitles()
    let projectsContainer = createDomElement('div','','projectsContainer','')

    projectTitles.forEach(project => {
        let currentProject = createDomElement('button',`${project}`,'collapsible',`${project}`)
        currentProject.innerHTML = ''
        currentProject.innerHTML = project
        
        projectsContainer.appendChild(currentProject)
        currentProject.addEventListener('click',()=>{
            addProjectContentStructure(mainDatabase.getProjectByTitle(project))
        })

    });

    addButton.insertAdjacentElement('afterend',projectsContainer)

    return projectsContainer
}




export{
    loadSidebar
}

