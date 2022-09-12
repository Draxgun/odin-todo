import {saveInLocalStorage, getFromLocalStorage} from './localStorage'

class Project {

    constructor(title,description,dueDate,tasks,color) {

        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.tasks = tasks
        this.color = color
    }
    
    /*Deltes a task from a project */
    addTask = (item) =>{
        let currentTasks = this.tasks
        currentTasks.push(item)
    }

    getTest = () => {
        console.log(this.title)
    }
}

class Task{

    constructor(tasktitle,dueDate,priority,notes,checklist,projectTitle) {
     this.tasktitle = tasktitle
     this.dueDate = dueDate
     this.priority = priority
     this.notes = notes
     this.checklist = checklist
     this.projectTitle = projectTitle
     
    }
    
    changeStaus = () => {
        if( this.checklist != 'true'){
            this.checklist = 'true'
        }else{
            this.checklist = 'false'
        }
        
    }
}



const mainDatabase = (() => {

    /*gets the info of the main database*/
    let data  = () => {return getFromLocalStorage('projectDatabase')};
    
    /*Adds a project to the main database*/
    let addProject = (project) => {
        let newData = data()
        newData.push(project)
        saveInLocalStorage('projectDatabase',newData)
    }

    let projectify = (project) =>{
        let newProject = new Project(
            project.title,
            project.description,
            project.dueDate,
            project.tasks,
            project.color
        )
        return  newProject
    }
 
    /*Gets the projectTitles*/
    let getProjectsTitles = () => {
        let newData = data()
        let titles  = newData.map((project)=> {return project.title})
        return titles
    }

    /*Get object by project name*/
    const getProjectByTitle = (title) =>{
        let newData = data();
        newData = newData.find(item => item.title === title)
        return projectify(newData)
    }

    /*Delete in local*/
    let deleteProject = (project) => {
        let newData = data()
        let newProject  = newData.map((item)=> {return project.title != item.title})
        saveInLocalStorage('projectDatabase',newProject)
    }

    /*Updates the project */
    let updateProject = (project) => {
        deleteProject(project)
        addProject(project)
    }




    return {
      addProject,
      data,
      getProjectsTitles,
      getProjectByTitle,
      deleteProject,
      updateProject
    };
  })();

export{
    Project,
    Task,
    mainDatabase
}
  