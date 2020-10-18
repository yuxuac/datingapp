import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { RegisterUser } from '../_models/registerUser';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  model: any = {};
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private accountService: AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }
}