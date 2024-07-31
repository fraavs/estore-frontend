import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.token || localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

  constructor() { }
  
}
