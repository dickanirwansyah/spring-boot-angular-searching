import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  email:string;

  constructor(
    private userService: UserRegistrationService
  ) { }

  ngOnInit(): void {
    let response = this.userService.getUsers();
    response.subscribe((data) => this.users = data);
  }

  public deleteUsers(id:number){
    let response =  this.userService.deleteUsers(id);
    response.subscribe((data) => this.users = data);
  }

  public findUsersByEmail(){
    let response = this.userService.getUsersByEmail(this.email);
    response.subscribe((data) => this.users = data);
  }
}
