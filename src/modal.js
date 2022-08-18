import {capitalizeFirstLetter} from './capitalize'
import {createDOMContainer,createDomElement} from './domCreators'

let createModal = () => {
    createModalStructure()
}

let createModalStructure = () => {
    
    let overlay = document.createElement('div')
    overlay.setAttribute('id','overlay')
    document.body.appendChild(overlay)

    let mainContainer = createDOMContainer('modal','modal')

    /* Header of the modal*/
    let modalHeader = createDOMContainer('','modalHeader')


    let title = createDomElement('div','','titleModal','Add Task')
    modalHeader.appendChild(title)

    let deleteButton = createDomElement('button','close','closeButton',`x`)
    deleteButton.querySelector = 'data-close-button'
    modalHeader.appendChild(deleteButton)

    mainContainer.appendChild(modalHeader)


    let structure = ['project','title','description','dueDate','priority','notes','checklist']

  
    structure.forEach(field => {
        
        let name = createDomElement('div',field,`modalFieldTitle`,`${capitalizeFirstLetter(field)}`)
        mainContainer.appendChild(name)

        let input = createDomElement('input',field,`modalFieldInput`,``)
        mainContainer.appendChild(input)
    })

    
    document.body.appendChild(mainContainer)
}




export {
    createModal
}