import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodolistDetail } from '../shared/todolist-detail.model';
import { TodolistDetailService } from '../shared/todolist-detail.service';

@Component({
  selector: 'app-todolist-details',
  templateUrl: './todolist-details.component.html',
  styleUrls: ['./todolist-details.component.css']
})
export class TodolistDetailsComponent implements OnInit {

  constructor(public service: TodolistDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.refreshlist()
  }

  populateForm(selectedRecord: TodolistDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Você deseja excluir esse registro?')) {
      this.service.deleteTodoItem(id)
        .subscribe(
          res => {
            this.service.refreshlist()
            this.toastr.error("Deletado com sucesso!", 'Detalhes do registro');
          },
          err => { console.log(err) }
        )
    }
  }
}
