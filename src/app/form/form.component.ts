import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubSearchService } from '../github-search.service';
import { User } from '../user';
import { ReposService } from '../repos.service'

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
  
  constructor(private githubSearchService:GithubSearchService, private reposService: ReposService) { 
		
	}

  

  submitUsername(username:string) {
		this.githubSearchService.getUser(username).then(result=>this.profile=result)
    this.reposService.getRepo(username).then(output=>this.repos=output)
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
