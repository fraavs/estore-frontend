import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor(private http: HttpClient) { }

  registerUser() {
    this.http.post('/api/auth/register', this.userData).subscribe(
      response => {
        this.message = 'User registered successfully!';
        this.userData = { username: '', email: '', password: '' };
      },
      error => {
        this.message = error.error.message || 'Registration failed. Please try again.';
      }
    );
  }

}
