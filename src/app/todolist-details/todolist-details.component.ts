import { Component, OnInit } from '@angular/core';
import { TodolistDetail } from '../shared/todolist-detail.model';
import { TodolistDetailService } from '../shared/todolist-detail.service';

@Component({
  selector: 'app-todolist-details',
  templateUrl: './todolist-details.component.html',
  styleUrls: ['./todolist-details.component.css']
})
export class TodolistDetailsComponent implements OnInit {

  constructor(public service:TodolistDetailService) { }

  ngOnInit(): void {
    this.service.refreshlist()
  }


  populateform(selectedRecord:TodolistDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }
}
