import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void { }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(resp => {
      console.log(resp);
      this.cancel();
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    // Pass value to parent
    this.cancelRegisterEvent.emit(false);
  }
}
