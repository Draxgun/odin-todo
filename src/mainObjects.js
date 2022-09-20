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

    deleteTask = (task) => {
        let currentTasks = this.tasks
        let indexOfTask = currentTasks.findIndex(item =>
            item.tasktitle == task.tasktitle &&
            item.dueDate == task.dueDate &&
            item.priority == task.priority &&
            item.notes == task.notes &&
            item.checklist == task.checklist &&
            item.projectTitle == task.projectTitle
        )

        this.tasks.splice(indexOfTask,1)
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
    
    let taskify = (task) => {
        let newTask = new Task(
            task.tasktitle,
            task.dueDate,
            task.priority,
            task.notes,
            task.checklist,
            task.projectTitle
        )
        return  newTask
    }
    /*Gets the projectTitles*/
    let getProjectsTitles = () => {
        let newData = data()
        let titles  = newData.map((project)=> {return project.title})
        return titles
    }

    /*Get object by project name*/
    let getProjectByTitle = (title) =>{
        let newData = data();

        newData = newData.find(item => item.title === title)
 
        return  projectify(newData)
    }

    /*Delete in local*/
    let deleteProject = (project) => {
        let newData = data()
        let newProject  = newData.filter((item)=> {return project.title != item.title})
        saveInLocalStorage('projectDatabase',newProject)
    }

    /*Updates the project */
    let updateProject = (project) => {
        deleteProject(project)
        addProject(project)
    }

    let getTasks = () => {
        let newData = data();
        let allTasks = []
        newData.forEach(project => {
            allTasks.push(project.tasks)
        });

        allTasks = allTasks.flat()
        return allTasks
    }

    let getTodaysTasks = () => {
        let tasks = getTasks()
        let today = new Date().toISOString().split('T')[0];
        console.log(today)

        let todaysTasks = tasks.filter(task => {return task.dueDate == today})

        console.log(todaysTasks)

        return todaysTasks
    }

    let getMonthTasks = () => {
        let tasks = getTasks()
        let today = new Date().toISOString().split('T')[0];
        let dateArray = today.split('-')
        let currentMonth = dateArray[1]

        let monthTasks = tasks.filter(task => {return task.dueDate.split('-')[1] == currentMonth})

        console.log(monthTasks)

        return monthTasks
    }




    return {
      addProject,
      data,
      getProjectsTitles,
      getProjectByTitle,
      deleteProject,
      updateProject,
      getTodaysTasks,
      getMonthTasks,
      getTasks,
    };
  })();

export{
    Project,
    Task,
    mainDatabase
}
  