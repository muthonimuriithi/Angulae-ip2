import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public showInput = true;

  submitUsername() {
		// this.searchGithubService.getUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
    this.showInput = false;
    // this.showData = true;
	}
   

  constructor() { }

  ngOnInit(): void {
  }

}
