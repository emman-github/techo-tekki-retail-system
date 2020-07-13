import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstName: any;
  lastName: any;
  ages: Array<number> = [18, 19, 20, 21, 22, 23, 24, 25];
  amount: any;
  address: any;
  age: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {
  	const newMember = {
  		firstName: this.firstName,
  		lastName: this.firstName,
  		age: this.age,
  		amount: this.amount,
  		address: this.address
  	};

  	console.log(localStorage.getItem('existingMembers'));

  	if (localStorage.getItem('existingMembers') === null) {
  		console.log(1)
  		var newMemberArray;
  		newMemberArray.push(newMember);
  		localStorage.setItem('existingMembers', newMemberArray); 
  	} else {
  		console.log(2)
  		var existingMembers = localStorage.getItem('existingMembers');
  		// existingMembers.push(newMember);
  		// JSON.stringify(existingMembers);
  		// localStorage.setItem('existingMembers', existingMembers);
  	} 

  	console.log(localStorage.getItem('existingMembers'));
  	
	this.router.navigate(['/dashboard/']);
  }

  login() {
	this.router.navigate(['/login/']);
  }
}
