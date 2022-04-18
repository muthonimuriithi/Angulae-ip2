import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubSearchService } from '../github-search.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  'user': User;
  githubSearchService:GithubSearchService;
  'username': string;
  public showInput = true; // Assign showInput boolean value true
  public showData = false; 

  

  submitUsername() {
		// this.githubSearchService.newUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
    this.showInput = false;
    this.showData = true;
	}

  showUserInput(hideInput:any) {
    this.showInput = hideInput;
    this.showData = false;
  }
   

  constructor(githubSearchService:GithubSearchService) { 
		this.githubSearchService = githubSearchService;
	}

  ngOnInit(): void {
  }

}
