import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterUser } from '../_models/registerUser';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Event to export values to parent
  @Output() cancelRegisterEvent = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void { }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(resp => {
      console.log(resp);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  cancel() {
    // Pass value to parent
    this.cancelRegisterEvent.emit(false);
  }
}
