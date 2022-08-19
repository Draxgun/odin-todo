import {capitalizeFirstLetter} from './capitalize'
import {createDOMContainer,createDomElement} from './domCreators'
import {createTaskOption} from './taskModal'



let createTaskModal = () => {
    

    let mainContainer = createTaskOption()
    // let mainContainer = createDOMContainer('','testContent')

    // let structure = ['project','title','description','dueDate','priority','notes','checklist']

  
    // structure.forEach(field => {
        
    //     let name = createDomElement('div',field,`modalFieldTitle`,`${capitalizeFirstLetter(field)}`)
    //     mainContainer.appendChild(name)

    //     let input = createDomElement('input',field,`modalFieldInput`,``)
    //     mainContainer.appendChild(input)
    // })

    
    return mainContainer
}


let createModalStructure = (content,modalName,title,openButton)=>{


    /* Creates the modal Container */
    let modalContainer = createDOMContainer(modalName,'modal')
    
    let modalContent = createDOMContainer('','modal-content')

    /* Creates the modal header */
    let modalHeader = createDOMContainer('',`${modalName}Header`)
    
    /* Creates the modal title */
    let modalTitle = createDomElement('div','','modalHeaderTitle',title)
    modalHeader.appendChild(modalTitle)
    /* Creates the close button*/
    let close  = createDomElement('button','','close','x')
    modalHeader.appendChild(close)

    /* Adds the modal */
    modalContent.appendChild(modalHeader)
    modalContent.appendChild(content)

    modalContainer.appendChild(modalContent)

    openButton.addEventListener('click',()=>{
        document.body.appendChild(modalContainer)
        modalContainer.style.display = "block";

    })
    close.addEventListener('click',()=>{
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    
    
    })

}

let closeModals = () => {
    modalContainer.style.display = "none";
    document.body.removeChild(modalContainer)
}



export {
    createTaskModal,
    createModalStructure
}