import {capitalizeFirstLetter} from './capitalize'

let createModal = () => {

}

let createModalStructure = () => {

    let mainContainer = createDOMContainer('modal','modal')

    
    let title = createDomElement('div','','titleModal','Add Task')
    mainContainer.appendChild(title)

    let structure = ['project','title','description','dueDate','priority','notes','checklist']

  
    structure.forEach(field => {
        
        let name = createDomElement('div',`${field}`,`modalFieldTitle`,`${capitalizeFirstLetter(field)}`)
        mainContainer.appendChild(name)

        let input = createDomElement('input', `input${capitalizeFirstLetter(field)}`,`modalFieldInput`,``)
        mainContainer.appendChild(input)
    })

    let container = document.getElementsByClassName('taskContainer')[0]
    container.appendChild(mainContainer)
}


let createDOMContainer = (name,classlist) =>{
    let element = document.createElement('div')
    element.setAttribute('id',`${name}Button`)
    element.classList.add(`${classlist}`)

    return element
}

let createDomElement = (type,name,classlist,textContent) =>{
    
    let element = document.createElement(`${type}`)
    element.textContent = capitalizeFirstLetter(textContent)
    element.setAttribute('id',`${name}Button`)
    element.classList.add(`${classlist}`)

    return element
}

export {
    createModalStructure
}