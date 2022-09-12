import {createDOMContainer,createDomElement} from './domCreators'
import {Project,Task,mainDatabase} from './mainObjects'
import {format, intervalToDuration,parseISO} from 'date-fns'
import {createTaskStructure} from './taskModal.js'
import {createModalStructure,closeModals} from './modal'




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
    descriptionTitle.style.backgroundColor = project.color
    let descriptionText = createDomElement('div','','descriptionBoxContent',project.description)

    descriptionBox.appendChild(descriptionTitle)
    descriptionBox.appendChild(descriptionText)
    rightSide.appendChild(descriptionBox)

    /*Date Counter*/
    let dateCounterBox = createDOMContainer('','contentDateCounter')
    let dateCounterTextTop = createDomElement('div','','counterBoxTop','The project is due on:')


    let dateCounterTextMiddle = createDomElement('div','','counterBoxBottom',`${intervalToDuration({start: new Date(), end: parseISO(project.dueDate)}).days}`)
    let dateCounterTextBottom = createDomElement('div','','counterBoxTop',`Day/s`)

    dateCounterBox.appendChild(dateCounterTextTop)
    dateCounterBox.appendChild(dateCounterTextMiddle)
    dateCounterBox.appendChild(dateCounterTextBottom)
    rightSide.appendChild(dateCounterBox)
    /*Left Side*/
    
    /*Task Section*/
    let taskContent = createDOMContainer('','bodyTaskContainer')

    /*Task Table header */
    let taskTableHeader = createDOMContainer('','taskTableHeader')

    taskTableHeader.style.backgroundColor = project.color

    let dueDateTable = createDomElement('div','','taskTableHeaderElement','Due Date')
    let nameTable = createDomElement('div','','taskTableHeaderElement','Name')
    let priorityTable = createDomElement('div','','taskTableHeaderElement','Priority')
    let checkTable = createDomElement('div','','taskTableHeaderElement','Checked')

    taskTableHeader.appendChild(dueDateTable);
    taskTableHeader.appendChild(nameTable);
    taskTableHeader.appendChild(priorityTable);
    taskTableHeader.appendChild(checkTable);

    /*Add task button*/
    let addTaskButton = createDomElement('button','addTask','addTask','+Add Task')

   
    let projectStructure = createTaskStructure(project)
    createModalStructure(projectStructure,'task','Add your task',addTaskButton)

    taskContent.appendChild(taskTableHeader);
    taskContent.appendChild(addTaskButton)
    leftSide.appendChild(taskContent)
    
    body.appendChild(leftSide)
    body.appendChild(rightSide)
    

    mainContainer.appendChild(header)
    mainContainer.appendChild(body)

    mainContent.appendChild(mainContainer)

    return mainContainer
}

export{
    addProjectContentStructure,
}