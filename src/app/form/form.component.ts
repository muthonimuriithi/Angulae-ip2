import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubSearchService } from '../github-search.service';
import { User } from '../user';
import { Repos } from '../repo/repos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  
  username: string="muthonimuriithi";
  public showInput = true;
  public showData = false; 
  profile!: User;
  repos: any;
  constructor(private githubSearchService:GithubSearchService) { 
		
	}

  

  submitUsername(username:string) {
		// this.githubSearchService.newUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
    this.githubSearchService.getUser(username).then(result=>this.profile=result)
    // this.showInput = false;
    // this.showData = true;
	}

  showUserInput(hideInput:any) {
    this.showInput = hideInput;
    this.showData = false;
  }
   

  
  ngOnInit(): void {
  }

}
