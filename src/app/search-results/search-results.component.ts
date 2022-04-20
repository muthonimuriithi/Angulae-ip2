import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubSearchService } from '../github-search.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Output() toggleBack = new EventEmitter();

  repos:any;
  searchname:any;

  
  
  constructor(private githubSearchService:GithubSearchService) { 
    this.githubSearchService = githubSearchService

  }

  searchRepos(){
    // this.githubSearchService.updateRepoSearchName(this.searchname);
  //   this.githubSearchService.searchRepos().then(replies=>{
  //    this.repos = replies['items'];
  //    console.log(this.repos)
  //  });
  }

   
  

ngOnInit() {
    // this.githubSearchService.searchRepos().then(replies:any[]=>{
    //   this.repos = replies['items'];
    //   console.log(this.repos)
    // });
  }

}

