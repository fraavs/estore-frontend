import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/home/services/users/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };
  message: string = '';


  constructor(private usersService: UsersService) { }

  register() {
    this.usersService.register(this.userData).subscribe(
      response => {
        console.log(response.message);
      },
      error => {
        console.error('Error during registration:', error);
      }
    )
  }

  
}
