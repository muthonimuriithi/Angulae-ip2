import { Component, OnInit } from '@angular/core';

import { GithubSearchService } from '../github-search.service';
import { User } from '../user';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  username: string = '';
  public showInput = true;
  public showData = false;
  profile!: User;
  repos: any;

  constructor(
    private githubSearchService: GithubSearchService,
    private reposService: ReposService
  ) {}

  submitUsername(username: string) {
    this.githubSearchService
      .getUser(username)
      .then((result) => (this.profile = result));
    this.reposService.getRepo(username).then((output) => (this.repos = output));
   
  }

  showUserInput(hideInput: any) {
    this.showInput = hideInput;
    this.showData = false;
  }

  ngOnInit(): void {
    this.submitUsername("muthonimuriithi")
  }
}
