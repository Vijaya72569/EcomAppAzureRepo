import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
fullName="";
 email="";
 password="";
 message="";
  constructor(private http: HttpClient,private router:Router) { }

  Register(){
    const RegisterData = {fullName:this.fullName, email: this.email, password: this.password };
  this.http.post<any>('https://userapi2025-awb0btfkgug2gnaq.canadacentral-01.azurewebsites.net/api/users/register', RegisterData)
    .subscribe({
      next: (res) => {
       this.message="Register successfull"
       console.log(res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.message = err.error?.message || 'Register failed';
      }
    });


  }
}
