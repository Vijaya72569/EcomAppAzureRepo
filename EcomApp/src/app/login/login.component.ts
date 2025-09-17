import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {}
/*
  login() {
    const loginData = { email: this.email, password: this.password };
    this.http.post<any>('http://localhost:5001/api/users/login', loginData)
      .subscribe({
        next: (res) => {
          this.auth.login(res.user); // Store user data
          this.router.navigate(['/imagelist']); // Go to imagelist
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Login failed';
        }
      });
  }
*/
login() {
  if (!this.email || !this.password) {
    this.errorMessage = 'Email and password are required';
    return;
  }

  const loginData = { email: this.email, password: this.password };

  this.http.post<any>('http://localhost:5001/api/users/login', loginData)
    .subscribe({
      next: (res) => {
        this.auth.login(res.user);
        this.router.navigate(['/imagelist']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Login failed';
      }
    });
}

//add this for register

signin():void{
    this.router.navigate(['/register']);
  } 

}
