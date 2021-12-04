import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodolistDetail } from 'src/app/shared/todolist-detail.model';
import { TodolistDetailService } from 'src/app/shared/todolist-detail.service';

@Component({
  selector: 'app-todolist-details-form',
  templateUrl: './todolist-details-form.component.html',
  styleUrls: ['./todolist-details-form.component.css']
})
export class TodolistDetailsFormComponent implements OnInit {

  constructor(public service: TodolistDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postTodoItem().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Tarefa cadastrada com sucesso!')
      },
      err => { console.log(err) }
      );
    }

    updateRecord(form: NgForm) {
      this.service.putTodoItem().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshlist();
          this.toastr.info('Tarefa alterada com sucesso!')
        },
        err => { console.log(err) }
      );
    }

    resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new TodolistDetail();
  }
}

