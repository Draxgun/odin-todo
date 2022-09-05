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
    deleteTask = (task) => {
        let indexDel = this.tasks.indexOf(task)
        task.splice(indexDel,1)
    }

    addTask = (task) => {
        this.tasks.push(task)
    }

}

class Task extends Project {

    constructor(title,dueDate,priority,notes,project,checklist) {
     this.title = title
     this.dueDate = dueDate
     this.priority = priority
     this.notes = notes
     super(project)
     this.checklist = checklist
    }
    
    changeStaus = () => {
        if( this.checklist === true){
            this.checklist = true
        }else{
            this.checklist = false
        }
        
    }
}



const mainDatabase = (() => {

    /*gets the info of the main database*/
    let data  = () => getFromLocalStorage('projectDatabase');
    
    /*Adds a project to the main database*/
    const addProject = (project) => {
        let newData = data()
        newData.push(project)
        saveInLocalStorage('projectDatabase',newData)
    }

    /*Gets the projectTitles*/
    const getProjectsTitles = () => {
        let newData = data()
        let titles  = newData.map((project)=> {return project.title})
        return titles
    }


    return {
      addProject,
      data,
      getProjectsTitles
    };
  })();

export{
    Project,
    Task,
    mainDatabase
}
  