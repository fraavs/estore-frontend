import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth.service';
import { UsersService } from 'src/app/home/services/users/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  credentials = {
    email: '',
    password: '',
  }
  message = '';

  constructor(private usersService: UsersService, private router: Router) { }

  login() {
    this.usersService.login(this.credentials).subscribe(
      response => {
        console.log('Login successful, token:', response.token);
        setTimeout(() => {
          this.router.navigate(['/home/products'])
        })
      },
      error => {
        console.error('Error during login:', error);
      }
    );
  }

  logout() {
    this.usersService.logout().subscribe(
      response => {
        console.log(response.message);
      },
      error => {
        console.error('Error during logout:', error);
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/home/register']);
  }

}
