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

  postTodoItem(){
    return this.http.post(this.baseURL,this.formData)
  }
}
