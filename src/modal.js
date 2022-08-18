import {capitalizeFirstLetter} from './capitalize'
import {createDOMContainer,createDomElement} from './domCreators'



let createTaskModal = () => {
    
    let mainContainer = createDOMContainer('','testContent')

    let structure = ['project','title','description','dueDate','priority','notes','checklist']

  
    structure.forEach(field => {
        
        let name = createDomElement('div',field,`modalFieldTitle`,`${capitalizeFirstLetter(field)}`)
        mainContainer.appendChild(name)

        let input = createDomElement('input',field,`modalFieldInput`,``)
        mainContainer.appendChild(input)
    })

    
    return mainContainer
}


let createModalStructure = (content,modalName,title,openButton)=>{


    /* Creates the modal Container */
    let modalContainer = createDOMContainer(modalName,'modal')
    
    /* Creates the modal header */
    let modalHeader = createDOMContainer('',`${modalName}Header`)
    
    /* Creates the modal title */
    let modalTitle = createDomElement('div','','modalHeaderTitle',title)
    modalHeader.appendChild(modalTitle)
    /* Creates the close button*/
    let close  = createDomElement('button','','close','x')
    modalHeader.appendChild(close)

    /* Adds the modal */
    modalContainer.appendChild(modalHeader)
    modalContainer.appendChild(content)


    openButton.addEventListener('click',()=>{
        console.log('hola')
        document.body.appendChild(modalContainer)
        modalContainer.style.display = "block";

    })
    close.addEventListener('click',()=>{
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    
    
    })

}


export {
    createTaskModal,
    createModalStructure
}