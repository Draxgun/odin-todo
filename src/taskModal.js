import {capitalizeFirstLetter} from './capitalize'
import {createDOMContainer,createDomElement} from './domCreators'
import {project,task} from './mainObjects'
import {createModalStructure} from './modal'

let createTaskOption = () => {
    
    let mainContainer = createDOMContainer('','optionContainer')

    let project =  createDomElement('button','modalProject','modalTaskButton','Project')
    let task =  createDomElement('button','modalTask','modalTaskButton','Task')

    createModalStructure(projectOption(),'test','',project)

    mainContainer.appendChild(project)
    mainContainer.appendChild(task)

    return mainContainer
}

let projectOption = () => {

        let test = createProjectStructure()
        console.log('bola')
        return test

}

let createProjectStructure = () => {
        
    let mainContainer = createDOMContainer("",'projectContainer')

    
    /* Gets the title input of the container*/
    let titleContainer = createDomElement('input','titleProject','modalInput','')
    titleContainer.placeholder = 'The projects title...'
    mainContainer.appendChild(titleContainer)

    /*Content description*/
    let contentSide = createDOMContainer("",'projectContentContainer')
    
    /*Description*/
    let descriptionBox = createDomElement('input','descriptionProject','modalTextInput','')
    descriptionBox.placeholder = 'The project consists of ....'
    descriptionBox.type = 'text'

    contentSide.appendChild(descriptionBox)

    /*Right side container*/
    let rightContainer = createDOMContainer("",'rightContainer')

    /*Color*/
    let colorBox = createDOMContainer("",'colorContainer')

    /* Color Title */
    let colorTitle = createDomElement('div','colorTitle','titleTextContent','Choose a color')
    colorBox.appendChild(colorTitle)
    
    /*ColorPicker*/
    let colorPicker = createDomElement('input','colorPicker','colorInput','')
    colorPicker.type = 'color'
    
    colorBox.appendChild(colorPicker)


    /*Date*/
    let dateBox = createDOMContainer('','dateContainer')

    /* Color Title */
    let dateTitle = createDomElement('div','dateTitle','titleTextContent','Choose a date')
    dateBox.appendChild(dateTitle)
    
    /*ColorPicker*/
    let datePicker = createDomElement('input','datePicker','dateInput','')
    datePicker.type = 'date'
    
    dateBox.appendChild(dateTitle)   

    rightContainer.appendChild(colorBox)
    rightContainer.appendChild(dateBox)

    contentSide.appendChild(rightContainer)
    mainContainer.appendChild(contentSide)


    return mainContainer

}

let readProject = (project) =>{
    let mainContainer = createDOMContainer(a,'projectContainer')

    
    /* Gets the title input of the container*/
    let titleContainer = createDomElement('input','titleProject','modalInput','')
    titleContainer.placeholder = 'The projects title...'
    titleContainer.textContent =  project.name
    mainContainer.appendChild(titleContainer)

    /*Content description*/
    let contentSide = createDOMContainer(a,'projectContentContainer')
    
    /*Description*/
    let descriptionBox = createDomElement('input','descriptionProject','modalTextInput','')
    descriptionBox.placeholder = 'The project consists of ....'
    descriptionBox.type = 'text'

    contentSide.appendChild(descriptionBox)

    /*Right side container*/
    let rightContainer = createDOMContainer(a,'rightContainer')

    /*Color*/
    let colorBox = createDOMContainer(a,'colorContainer')

    /* Color Title */
    let colorTitle = createDomElement('div','colorTitle','titleTextContent','Choose a color')
    colorBox.appendChild(colorTitle)
    
    /*ColorPicker*/
    let colorPicker = createDomElement('input','colorPicker','colorInput','')
    colorPicker.type = 'color'
    
    colorBox.appendChild(colorPicker)


    /*Date*/
    let dateBox = createDOMContainer(date,'dateContainer')

    /* Color Title */
    let dateTitle = createDomElement('div','dateTitle','titleTextContent','Choose a date')
    dateBox.appendChild(dateTitle)
    
    /*ColorPicker*/
    let datePicker = createDomElement('input','datePicker','dateInput','')
    datePicker.type = 'date'
    
    dateBox.appendChild(dateTitle)   

    rightContainer.appendChild(colorBox)
    rightContainer.appendChild(dateBox)

    contentSide.appendChild(rightContainer)
    mainContainer.appendChild(contentSide)


    return mainContainer
}

export{
    createTaskOption
}