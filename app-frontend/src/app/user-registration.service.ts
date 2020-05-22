import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpClient: HttpClient) { }

  public doRegistration(user) {
    return this.httpClient.post("http://localhost:8080/api/user/register", user, 
    {responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.httpClient.get("http://localhost:8080/api/user/getAllUsers");
  }

  public getUsersByEmail(email){
    return this.httpClient.get("http://localhost:8080/api/user/getUser/"+email);
  }

  public deleteUsers(id){
    if(confirm('are you sure to delete this data '+id+' ?')){
      return this.httpClient.delete("http://localhost:8080/api/user/cancelRegistration/"+id);
    }
  }
}
