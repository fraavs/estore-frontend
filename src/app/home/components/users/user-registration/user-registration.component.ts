import { Component } from '@angular/core';
import { UsersService } from 'src/app/home/services/users/users.service';
import { Router } from '@angular/router';

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


  constructor(private usersService: UsersService, private router: Router) { }

  register() {
    this.usersService.register(this.userData).subscribe(
      response => {
        console.log(response.message);
        setTimeout(() => {
          this.router.navigate(['home/login']);
        }, 2000);
      },
      error => {
        console.error('Error during registration:', error);
      }
    )
  }


}
