import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://192.168.144.132:3000/api/auth';
  private token: string | null = null;
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('jwtToken');
  }

  register(user: { username: string; email: string; password: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      catchError(this.handleError),
      tap(response => this.storeToken(response.token))
    );
  }

  logout(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/logout`).pipe(
      tap(() => this.clearToken()),
      catchError(this.handleError)
    );
  }

  private storeToken(token: string): void {
    this.token = token;
    localStorage.setItem('jwtToken', token);
    this.currentUserSubject.next(token);
  }

  private clearToken(): void {
    this.token = null;
    localStorage.removeItem('jwtToken');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('jwtToken');
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error.error.message || 'Server Error');
  }

  getUserNameFromToken(token: string): string | null {
    const decoded: any = jwtDecode(token);
    return decoded.username || null;
  }

}
