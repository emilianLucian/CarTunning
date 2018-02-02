import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
	phoneNumber: number = null;

	ngOnInit() {

	}

	onSubmit(form: NgForm) {
		const username = form.value.username;
		const email = form.value.email;
		const phoneNumber = form.value.phoneNumber;
		const message = form.value.message;
		form.reset();
	}
}
