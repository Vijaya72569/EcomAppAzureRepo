import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   private userData: any;

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userData = user;
  }

  logout() {
    localStorage.removeItem('user');
    this.userData = null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getUser(): any {
    if (!this.userData) {
      const data = localStorage.getItem('user');
      this.userData = data ? JSON.parse(data) : null;
    }
    return this.userData;
  }
}
