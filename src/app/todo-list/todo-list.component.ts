import { Component,ViewChild, OnInit, ElementRef } from '@angular/core';
import { RemoteService } from '../Services/remote.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @ViewChild("myInput") _el: ElementRef;

  setFocus() {
    this._el.nativeElement.focus();
  }

  public titletext: string = "Task List"
  pendingTasks: any = null
  completedTasks: any = null

  taskName: string = null
  isCompleted: string = "true"
  
  //For new task
  newTaskName: string = null
  enableNewTaskTextBox: boolean = true

  //Track row where editing is happening
  editPendingTaskRowId: number = 0
  editCompletedTaskRowId: number = 0

  constructor(private remote:RemoteService) { 
  }

  ngOnInit(): void {
    console.log(this.getPendingTasks())

    this.getPendingTasks()      
    this.getcompletedTasks() 
    console.log(this.pendingTasks)
  }

  ngAfterViewInit() {
    this._el.nativeElement.focus();
  }

  //Get all pending tasks via API
  getPendingTasks() {
    this.remote.getAllPendingTasks().subscribe(
      success => { 
        console.log(success)
        this.pendingTasks = success
      },
      error => {
        console.log(error)})
  }

  //Get all completed tasks via API
  getcompletedTasks() {
    this.remote.getAllCompletedTasks().subscribe(
      success => { 
        console.log(success)
        this.completedTasks = success
      },
      error => {
        console.log(error)})
  }

  //Adding a new task to pending task list
  addNewTask(formData) {

    formData.value.isCompleted = "false"
    console.log(formData.value)
    this.remote.sendNewTask(formData.value).subscribe(
      success => { 
        this.getPendingTasks()
        console.log(success)
      },
      error => {
        console.log(error)
      })
    this.newTaskName = null
  }

  //Changing the completion status of task basis input
  changeTaskStatus(id, newStatus) {
    //reset any active editing
    this.editPendingTaskRowId = 0
    this.editCompletedTaskRowId = 0

    var object = {}
    object['isCompleted'] = newStatus
    this.remote.modifyTaskStatus(id, object).subscribe(
      success => { 
        console.log(newStatus)
        this.getPendingTasks()
        this.getcompletedTasks()
        console.log(success)
      },
      error => {
        console.log(error)
      })
    }

    //Editing task description
    editTask(id, editedTask) {

      //Check if task name is edited before calling API
      if(editedTask) {

        var object = {}
        object['taskName'] = editedTask
        this.remote.editTaskNameByID(id,object).subscribe(
          success => { 
            console.log(success)

            this.getPendingTasks()
            this.getcompletedTasks()
          },
          error => {
            console.log(error)
        })

        console.log(this.editPendingTaskRowId)
      }
      else
        console.log("No change in task title.")
      
      //reset any active editing
      this.editPendingTaskRowId = 0
      this.editCompletedTaskRowId = 0
    
    }

    //Deleting any task via API
    deleteTask(id) {
      //reset any active editing
      this.editPendingTaskRowId = 0
      this.editCompletedTaskRowId = 0
  
      this.remote.deleteTaskById(id).subscribe(
        success => { 
          console.log(success)
          this.getPendingTasks()
          this.getcompletedTasks()
          console.log(success)
        },
        error => {
          console.log(error)
        })
    }

    //Activate editing for a particular pending task
    togglePendingTaskEdit(id) {

      //reset any active editing
      this.editCompletedTaskRowId = 0
      
      console.log(id)
      this.editPendingTaskRowId = 
        (this.editPendingTaskRowId==0)  ? 
          id : (this.editPendingTaskRowId!=id) ? id : 0
    }

    //Activate editing for a particular completed task
    toggleCompletedTaskEdit(id) {
      
      //reset any active editing
      this.editPendingTaskRowId = 0

      console.log(id)
      this.editCompletedTaskRowId = 
        (this.editCompletedTaskRowId==0)  ? 
          id : (this.editCompletedTaskRowId!=id) ? id : 0
    }
}