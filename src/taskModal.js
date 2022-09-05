import {capitalizeFirstLetter} from './capitalize'
import {createDOMContainer,createDomElement} from './domCreators'
import {Project,Task,mainDatabase} from './mainObjects'
import {createModalStructure,closeModals} from './modal'
import {saveInLocalStorage, getFromLocalStorage} from './localStorage'


let createTaskOption = () => {
    
    let mainContainer = createDOMContainer('','optionContainer')

    let project =  createDomElement('button','modalProject','modalTaskButton','Project')
    let task =  createDomElement('button','modalTask','modalTaskButton','Task')

    createModalStructure(createProjectStructure(),'project','Add your project',project)


    project.addEventListener('click',()=>{
        let modalContainer = document.getElementById('task')
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    })

    task.addEventListener('click',()=>{
        let modalContainer = document.getElementById('task')
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    })

    mainContainer.appendChild(project)
    mainContainer.appendChild(task)

    return mainContainer
}


let createProjectStructure = () => {
        
    let mainForm = createDomElement('form','projectForm','projectFormContainer','')

    let mainContainer = createDOMContainer("",'projectContainer');

    
    /* Gets the title input of the container*/
    let titleContainer = createDomElement('input','titleProject','projectInput','');
    titleContainer.placeholder = 'The projects title...';
    titleContainer.setAttribute('required','')
    mainContainer.appendChild(titleContainer);

    /*Content description*/
    let contentSide = createDOMContainer("",'projectContentContainer');
    
    /*Description*/
    let descriptionBox = createDomElement('textarea','descriptionProject','projectInput','');
    descriptionBox.placeholder = 'The project consists of ....';
    descriptionBox.setAttribute('required','')

    contentSide.appendChild(descriptionBox)

    /*Right side container*/
    let rightContainer = createDOMContainer("",'rightContainer');

    /*Color*/
    let colorBox = createDOMContainer("",'colorContainer');

    /* Color Title */
    let colorTitle = createDomElement('div','colorTitle','titleTextContent','Choose a color');
    colorBox.appendChild(colorTitle);
    
    /*ColorPicker*/
    let colorPicker = createDomElement('input','colorPicker','projectInput','');
    colorPicker.setAttribute('required','')
    colorPicker.type = 'color';
    
    colorBox.appendChild(colorPicker);


    /*Date*/
    let dateBox = createDOMContainer('','dateContainer')

    /* Color Title */
    let dateTitle = createDomElement('div','dateTitle','titleTextContent','Choose a due date')
    dateBox.appendChild(dateTitle)
    
    
    /*ColorPicker*/
    let datePicker = createDomElement('input','datePicker','projectInput','');
    datePicker.type = 'date';
    datePicker.setAttribute('required','')
    
    dateBox.appendChild(datePicker) ;  

    rightContainer.appendChild(colorBox);
    rightContainer.appendChild(dateBox);

    contentSide.appendChild(rightContainer);
    mainContainer.appendChild(contentSide);

    /*Project Container */
    let addProjectContainer = createDOMContainer('','projectAddButtonContainer');

    let addButton = createDomElement('input','addProject','addProject','Add project');
    addButton.type = 'submit'

    
    mainForm.addEventListener('submit',()=>{
        let newProject = createProject();
        mainDatabase.addProject(newProject);
        
    })

    addProjectContainer.appendChild(addButton)

    mainContainer.append(addProjectContainer)
    mainForm.appendChild(mainContainer)
    return mainForm

}

let createProject = () => {
   let projectInput = document.querySelectorAll('.projectInput')

   let project = new Project(
    projectInput[0].value,
    projectInput[1].value,
    projectInput[3].value,
    [],
    projectInput[2].value
   )

    return project
}





let createTaskStructure = () => {
    
    let mainContainer = createDOMContainer("",'projectContainer')

    
    /* Gets the title input of the container*/
    let titleContainer = createDomElement('input','titleTask','modalInput','')
    titleContainer.placeholder = 'The tasks title...'
    mainContainer.appendChild(titleContainer)

    /*Content description*/
    let contentSide = createDOMContainer("",'taskContentContainer')

    /*notes*/
    let notes  = createDomElement('input','noteFiled','note','')
    notes.placeholder = 'Some notes of the task...'
    
    /*Project*/
    let projectFather = createDomElement('input')

    /*Right side container*/
    let rightContainer = createDOMContainer("",'rightContainer')

    /*Date*/
    let dateBox = createDOMContainer('','dateContainer')

    /* Date Title */
    let dateTitle = createDomElement('div','dateTitle','titleTextContent','Choose a due date')
    dateBox.appendChild(dateTitle)
    
    /*DatePicker*/
    let datePicker = createDomElement('input','datePicker','dateInput','')
    datePicker.type = 'date'
    

    dateBox.appendChild(dateTitle)   

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