import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private userRegisterService: UserRegistrationService) { }

  user:any = {};
  message = "Registration";
  response:any;

  ngOnInit(): void {
  }

  public registerNow() {
    console.log(this.user)
    let resp = this.userRegisterService.doRegistration(this.user);
    resp.subscribe((data) => this.response= data)
  }

}
