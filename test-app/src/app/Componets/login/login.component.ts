import { Component, OnInit } from '@angular/core';

export class User implements IUser {
  Email: string;
  UserName: string;
  Password: string; //TODO: hash this value.
  constructor(email, userName, password) {
    this.Email = email; // ICON : PNG LINK...
    this.UserName = userName;
    this.Password = password;
  }
}
export interface IUser {
  Email: string; // ICON : PNG LINK...
  UserName: string;
  Password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  public User: IUser = null;
  constructor() { }

  ngOnInit(): void {
    this.User = {
      UserName: 'TestUser',
      Email: 'TestUser@gmail.com',
      Password: 'TestUserPass'
    }

  }

}
