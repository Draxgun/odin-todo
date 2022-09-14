import {createDOMContainer,createDomElement} from './domCreators'
import {Project,Task,mainDatabase} from './mainObjects'
import {format, intervalToDuration,parseISO} from 'date-fns'
import {createTaskStructure,readTask} from './taskModal.js'
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

    let deleteTaskContainer = createDOMContainer('','deleteTaskContainer')
    let deleteTaskButton = createDomElement('button','deleteTask','deleteTaskButton','Delete')
    deleteTaskContainer.appendChild(deleteTaskButton)

    deleteTaskButton.addEventListener('click',()=>{
        
        let deleteButtons = Array.from(document.getElementsByClassName('deleteTaskBody'))
        deleteButtons.forEach(deleteButton => {
            if (deleteButton.style.display === 'none'){
                deleteButton.style.display = 'flex'
            }else{
                deleteButton.style.display = 'none'
            }
       });



    })

    rightSide.appendChild(deleteTaskButton)
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


    /*Task table content*/
    let projectTasks = mainDatabase.getProjectTasks(project.title)
    let taskTableBody = createDOMContainer('','taskTableBody')

    projectTasks.forEach(task => {

        let taskTableBodyRow = createDOMContainer(`taskTableBodyRow`,'taskTableBodyRow')
        taskTableBodyRow.setAttribute('collapsed','true')

        let deleteTask = createDomElement('button',`deleteTaskBody`,'deleteTaskBody','Del')
        
        deleteTask.style.display = 'none'

        deleteTask.addEventListener('click',()=>{
            taskTableBody.removeChild(taskTableBodyRow)
            project.deleteTask(task)
            mainDatabase.updateProject(project)

        }) 

        let dateValue = createDomElement('div',`${task.dueDate}`,`taskTableBodyElement`,task.dueDate)

        let nameValue = createDomElement('div',`${task.tasktitle}`,`taskTableBodyElement`,task.tasktitle)

        let priorityValue = createDomElement('div',`${task.priority}`,`taskTableBodyElement`,task.priority)

        let statusValue = createDomElement('div',`${task.checklist.toString()}`,`taskTableBodyElement`,task.checklist.toString())

        createModalStructure(readTask(task),'modal','Information of the task',dateValue)
        createModalStructure(readTask(task),'modal','Information of the task',nameValue)
        createModalStructure(readTask(task),'modal','Information of the task',priorityValue)

        taskTableBodyRow.appendChild(deleteTask)
        taskTableBodyRow.appendChild(dateValue)
        taskTableBodyRow.appendChild(nameValue)
        taskTableBodyRow.appendChild(priorityValue)
        taskTableBodyRow.appendChild(statusValue)

        taskTableBody.appendChild(taskTableBodyRow)

    });


    /*Add task button*/
    let addTaskButton = createDomElement('button','addTask','addTask','+Add Task')

   
    let projectStructure = createTaskStructure(project)
    createModalStructure(projectStructure,'task','Add your task',addTaskButton)

    taskContent.appendChild(taskTableHeader);
    taskContent.appendChild(taskTableBody);
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