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

export{
    Project,
    Task
}
  