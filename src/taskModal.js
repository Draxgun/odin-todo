import {capitalizeFirstLetter} from './capitalize'
import {createDOMContainer,createDomElement} from './domCreators'
import {project,task} from './mainObjects'

let createTaskOption = () => {
    
    let mainContainer = createDOMContainer('','optionContainer')

    let project =  createDomElement('button','modalProject','modalTaskButton','Project')
    let task =  createDomElement('button','modalTask','modalTaskButton','Task')

    mainContainer.appendChild(project)
    mainContainer.appendChild(task)

    return mainContainer
}

let projectOption = (project) => {
    if (project ===  undefined) {
        let mainContainer = createDOMContainer('','optionContainer')

    }
}

let createProjectStructure = () => {
        
    let mainContainer = createDOMContainer('','projectContainer')

    let titleContainer = createDomElement('input','titleProject','modalInput','')
    mainContainer.appendChild()

     

}

export{
    createTaskOption
}