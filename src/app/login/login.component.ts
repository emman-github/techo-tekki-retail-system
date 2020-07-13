import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any; 

  ngOnInit(): void {

  }
 
  constructor(
  	private httpClient: HttpClient,
  	private router: Router
  ) { }

  login() {
  	this.router.navigate(['/dashboard/']);
  	// const url = 'https://kbb-back-end.000webhostapp.com/index.php/Welcome/login';

  	// let params = new FormData();  
   //  params.append('ma_username', this.username);
   //  params.append('ma_password', this.password);
 
  	// this.httpClient.post(url, params).subscribe(response => {
  	// 	console.log(response);
  	// })
  } 

  register() {
  	this.router.navigate(['/registration/']);
  	// const url = 'https://kbb-back-end.000webhostapp.com/index.php/Welcome/login';

  	// let params = new FormData();  
   //  params.append('ma_username', this.username);
   //  params.append('ma_password', this.password);
 
  	// this.httpClient.post(url, params).subscribe(response => {
  	// 	console.log(response);
  	// })
  } 
}
