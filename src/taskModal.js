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
    createModalStructure(selectProjectStrucutre(),'task','Choose your project',task)

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


    let colorPicked = createDomElement('input','colorPicker','projectInput','');
    colorPicked.type = 'color'
    colorPicked.value = '#CB17E4'
    colorPicked.setAttribute('required','')
    
    colorBox.appendChild(colorPicked);

    
    /*ColorPicker*/
    let colorPickerBox =  createDomElement('div','colorBox','colorBox','');

    let colorOptions = {
        purple: "#CB17E4",
        pink:"#F761A1",
        red:"#FF3333",
        orange: "#FF8033",
        green: "#36E417",
        blue: "#3346FF",
        lightBlue: "#17E4DB",
        gray: "#E9E9E9",
    }

    Object.keys(colorOptions).forEach(color => {

        let currentColor = colorOptions[color]

        let currentColorButton = createDomElement('button',color,'colorPickerOption','')
        currentColorButton.style.backgroundColor = currentColor
        currentColorButton.type = 'button'

        currentColorButton.addEventListener('click',() =>{
            colorPicked.value = currentColor
            colorPicked.disabled = true

        })

        colorPickerBox.appendChild(currentColorButton)
      

    });

    colorBox.appendChild(colorPickerBox)



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

let selectProjectStrucutre = () => {

    let mainContainer = createDOMContainer('','projectChoosingContainer')

    /*Main title*/
    let mainText = createDomElement('div','','projectChoosingText','Choose the project you want to add the task too')
    mainContainer.appendChild(mainText)

    /*Main Select*/
    let projectInput = createDomElement('select','','selectInput','fproject')

    projectInput.options.add(new Option('','',true,true))
    projectInput.options[0].setAttribute('disabled','')
    projectInput.options[0].setAttribute('hidden','')

    let general = mainDatabase.getProjectsTitles();

    for(let i = 0; i < general.length; i++){
        projectInput.options.add(new Option(general[i], general[i]));
    }



    
    projectInput.addEventListener('change',() =>{
        


        let invisibleButton = createDomElement('button','','invisible','a');
        mainContainer.appendChild(invisibleButton)

        let projectChosen = mainDatabase.getProjectByTitle(projectInput.value);

        let projectStructure = createTaskStructure(projectChosen)
        createModalStructure(projectStructure,'task','Add your task',invisibleButton)
        invisibleButton.click()
        projectInput.selectedIndex = -1

        let modalContainer = document.getElementById('task')
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)


    })
    
    mainContainer.appendChild(projectInput)


    return mainContainer
}

let createTaskStructure = (project) => {
    
    let mainForm = createDomElement('form','taskForm','taskFormContainer','')

    let mainContainer = createDOMContainer("",'taskModalContainer')


    /* Creates Top part Container */
    let topContainer = createDOMContainer('','topTaskModalContainer')
    topContainer.style.background = project.color


    /* Gets the title input of the container*/
    let titleContainer = createDomElement('input','titleTask','modalInput','')
    titleContainer.placeholder = 'The tasks title...'
    titleContainer.setAttribute('required','')

    topContainer.appendChild(titleContainer)


    /*Project Name*/
    let projectName = createDomElement('div','taskProjectTitle','taskProjecTitle',project.title)
    topContainer.appendChild(projectName)


    /* Appends it to the top container */
    mainContainer.appendChild(topContainer)

    /*Content description*/
    let contentSide = createDOMContainer("",'taskContentContainer')

    /*notes*/
    let notes  = createDomElement('textarea','noteTask','noteTask','')
    notes.placeholder = 'Some notes of the task...'
    
    contentSide.appendChild(notes)

    /*Creates the middle container */
    let middleContainer = createDOMContainer("",'middleContainer')


    /*Project Priority*/

    /*priority Box*/
    let priorityBox = createDOMContainer('','priorityContainer')

    /*priority Title*/
    let priorityTitle = createDomElement('div','priorityTitle','titleTextContent','Priority ')
    priorityBox.appendChild(priorityTitle)

    /*priority Input*/
    let priorityInputBox = createDOMContainer('','priorityInputBox')

    let priority = {
        Low : '#23F919',
        Mid: '#F9F019',
        High: '#F91919'
    }

    Object.keys(priority).forEach(level => {
        
        let currentLevel = priority[level]
        /*Creates the container for each of the option*/
        let priorityBox = createDOMContainer('','priorityOptionBox')

        /*Creates the priority Boxes*/
        let priorityIndicator = createDOMContainer(`${level}Input`,'priorityControl')
        priorityIndicator.setAttribute('status','off');
        priorityIndicator.style.background = '#C2C2C2'

        /*Creates the label for it*/
        let priorityLabel = createDomElement('div',`${level}Label`,'priorityLabel',`${level}`)



        priorityIndicator.addEventListener('click',()=>{
            onlyOneOn()
            if(priorityIndicator.getAttribute('status') == 'off'){
                priorityIndicator.style.background = currentLevel
                priorityIndicator.setAttribute('status','on');
            }else{
                priorityIndicator.setAttribute('status','off');
                priorityIndicator.style.background = '#C2C2C2'
            }
        })

        priorityLabel.addEventListener('click',()=>{
            onlyOneOn()
            if(priorityIndicator.getAttribute('status') == 'off'){
                priorityIndicator.style.background = currentLevel
                priorityIndicator.setAttribute('status','on');
            }else{
                priorityIndicator.setAttribute('status','off');
                priorityIndicator.style.background = '#C2C2C2'
            }
        })

        priorityBox.appendChild(priorityIndicator)
        priorityBox.appendChild(priorityLabel)


        priorityInputBox.appendChild(priorityBox)
    });

    priorityBox.appendChild(priorityInputBox)
    middleContainer.appendChild(priorityBox)

    /*Date*/
    let dateBox = createDOMContainer('','dateContainer')

    /* Date Title */
    let dateTitle = createDomElement('div','dateTitle','titleTextContent','Choose a due date')
    dateBox.appendChild(dateTitle)
    
    /*DatePicker*/
    let datePicker = createDomElement('input','datePicker','dateInput','')
    datePicker.type = 'date'
    dateBox.appendChild(datePicker)   

    middleContainer.appendChild(dateBox)

    /*Right side container*/
    let rightContainer = createDOMContainer("",'rightContainer')

    /*Checkbox Container*/
    let checkboxContainer = createDOMContainer('','checkboxContainer')

    /* Checkbox Title */
    let checkboxTitle = createDomElement('div','statusTitle','titleTextContent','Project Status')
    checkboxContainer.appendChild(checkboxTitle)

    /*Checkbox Input*/
    let checkboxInput = createDomElement('input','checkbox','checkboxInput','')
    checkboxInput.type = 'checkbox'
    checkboxContainer.appendChild(checkboxInput)


    rightContainer.appendChild(checkboxContainer)

    contentSide.appendChild(middleContainer)
    contentSide.appendChild(rightContainer)
    mainContainer.appendChild(contentSide)


    return mainContainer
}

let onlyOneOn = () => {
    let priorityInput = Array.from(document.getElementsByClassName('priorityControl'))
    let statusArray = priorityInput.map((option) =>{
        return option.getAttribute('status')
    })

    let counter = 0;
    for(let statuses of statusArray){
        if (statuses == 'on'){
            counter++
        }
    }

    if (counter == 1){
        priorityInput.forEach(input => {
            input.setAttribute('status','off');
            input.style.background = '#C2C2C2'
        });
    }
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
    mainForm.appendChild(mainContainer)


    return mainForm
}



export{
    createTaskOption,
    createTaskStructure,
}