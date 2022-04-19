import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { GithubSearchService } from '../github-search.service';
// import { NgForm } from '@angular/forms';
// import { User } from '../user';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-search-results',
//   templateUrl: './search-results.component.html',
//   styleUrls: ['./search-results.component.css']
// })
// export class SearchResultsComponent implements OnInit { 

//   @Output() toggleBack = new EventEmitter();

//   user: User []= {
    
//   }

//   user:User;
//   'hideInput':boolean;
//   githubSearchService:GithubSearchService;

//   constructor(githubSearchService:GithubSearchService) { 
//     this.githubSearchService = githubSearchService

//   }

//   goBack(){
//     this.hideInput = true;
//     this.toggleBack.emit(this.hideInput);
//   }

//   ngOnInit(){
//     this.user = this.githubSearchService.user; 
//   }

// }
