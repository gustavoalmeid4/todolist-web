import { Injectable } from '@angular/core';
import { TodolistDetail } from './todolist-detail.model';
import{HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TodolistDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44326/api/todoitems'
  formData:TodolistDetail = new TodolistDetail()
  list :TodolistDetail[];

  postTodoItem(){
    return this.http.post(this.baseURL,this.formData)
  }

  putTodoItem() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deleteTodoItem(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as TodolistDetail[])
  }
}
