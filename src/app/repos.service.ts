import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {


  repos:any;
  repo!: Repo;
  searchname! : string;
  username:any;
  

 

  constructor(private http: HttpClient) { 
    // this.reposService = new ReposService('',0,'');
    this.http = http;

    
    
  }

  async getRepo(username: string){
    interface ApiResponse{
          login:string;
          id:number;
          avatar_url:string;
        }
    
  
     const fetchData = this.http.get<ApiResponse>('https://api.github.com/users/' + username + "/repos")  
     return await lastValueFrom(fetchData).then(response=>{
      // for (const repo of response){}
      // this.repos.avatar_url = response.avatar_url
      // console.log(response)
     return this.repos=response
  
     
    })
    .catch(err=>{
      return err
      // this.user.name = "Cannot find name"
      // this.user.login = "Cannot find login information" 
      // this.user.repos = 0
  
  
    
  
    })
  
   
    }
   updateName(userName:string){
      this.username=userName;
    }
  
    updateRepoSearchName(Searchname:string){
      this.searchname = Searchname;
    }
}
