import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http:HttpClient) { }

  getAllTasks() {
    return this.http.get("http://localhost:3000/allTasks")
  }

  sendNewTask(task) {
    return this.http.post("http://localhost:3000/allTasks/", task)
  }

  getTaskById(id) {
    return this.http.get("http://localhost:3000/allTasks/" + id)
  }

  deleteTaskById(id) {
    return this.http.delete("http://localhost:3000/allTasks/" + id)
  }

  getAllPendingTasks() {
    return this.http.get("http://localhost:3000/allTasks?isCompleted=false")

  }

  getAllCompletedTasks() {
    return this.http.get("http://localhost:3000/allTasks?isCompleted=true")
  }

  modifyTaskStatus(id, newStatusObj) {
    return this.http.patch("http://localhost:3000/allTasks/" + id, newStatusObj)
  }

  editTaskNameByID(id, taskObj) {
    return this.http.patch("http://localhost:3000/allTasks/" + id, taskObj)
  }
}