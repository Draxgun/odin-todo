import {createDOMContainer,createDomElement} from './domCreators'
import {Project,Task,mainDatabase} from './mainObjects'
import {format, intervalToDuration,parseISO} from 'date-fns'




let addProjectContentStructure = (project) => {

    /*Main content*/
    let mainContent = document.querySelector('.taskContainer')
    
    /* Clears the inner html */
    mainContent.innerHTML = ''

    /* Creates the main container */
    let mainContainer = createDOMContainer('','mainContentContainer');

    /*Creates the head of the container*/
    let header = createDOMContainer('','contentHeader');
    header.style.backgroundColor = project.color

    /*Creates the title of the header*/
    let headerTitle = createDomElement('div','','contentHeaderTitle',project.title)
    header.appendChild(headerTitle)

    /*Get todays current date*/
    let headerDate = createDomElement('div','','contentHeaderDate',format(new Date(),'P'))
    header.append(headerDate)

    /*Body*/
    let body = createDOMContainer('','contentBody');


    let leftSide = createDOMContainer('','contentLeft')
    let rightSide = createDOMContainer('','contentRight')

    /*Task Section*/
    let taskContainer = createDOMContainer('','contentTaskContainer')
    
    /*Description Section*/
    let descriptionBox = createDOMContainer('','contentDescriptionBox')

    /*Description Table*/
    let descriptionTitle = createDomElement('div','','descriptionBoxTitle','Description');
    let descriptionText = createDomElement('div','','descriptionBoxContent',project.description)

    descriptionBox.appendChild(descriptionTitle)
    descriptionBox.appendChild(descriptionText)
    rightSide.appendChild(descriptionBox)

    /*Date Counter*/
    let dateCounterBox = createDOMContainer('','contentDateCounter')
    let dateCounterTextTop = createDomElement('div','','counterBoxTop','The project is due on:')


    let interval = intervalToDuration({
        start: new Date(),
        end:  parseISO(project.dueDate)
    })


    let dateCounterTextBottom = createDomElement('div','','counterBoxBottom',`${intervalToDuration({start: new Date(), end: parseISO(project.dueDate)}).days}`)

    dateCounterBox.appendChild(dateCounterTextTop)
    dateCounterBox.appendChild(dateCounterTextBottom)
    rightSide.appendChild(dateCounterBox)

    body.appendChild(rightSide)
    


    mainContainer.appendChild(header)
    mainContainer.appendChild(body)

    mainContent.appendChild(mainContainer)

    return mainContainer
}

export{
    addProjectContentStructure,
}