class project {

    constructor(title,description,dueDate,priority,notes,tasks,checklist) {
     this.tasks = tasks
     this.title = title
     this.description = description
     this.dueDate = dueDate
     this.priority = priority
     this.notes = notes
     this.checklist = checklist
    }
    
    /*Deltes a task from a project */
    deleteTask = (task) => {
        let indexDel = this.tasks.indexOf(task)
        task.splice(indexDel,1)
    }

}

class task extends project {

    constructor(title,description,dueDate,priority,notes,project,checklist) {
     this.title = title
     this.description = description
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
    project,
    task
}
  