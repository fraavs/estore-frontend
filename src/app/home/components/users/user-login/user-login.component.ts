import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginData = {
    email: '',
    password: '',
  }
  message = '';
  
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  loginUser() {
    this.http.post('/api/auth/login', this.loginData).subscribe(
      (response: any) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/products']);
      },
      error => {
        this.message = error.error.message || 'Login failed. Please try again.';
      }
    );
  }


}
