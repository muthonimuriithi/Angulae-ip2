import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { Repo } from './repo';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  repos: any;
  repo!: Repo;
  searchname!: string;
  username: any;

  constructor(private http: HttpClient) {}

  async getRepo(username: string) {
    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
    }

    const fetchData = this.http.get<ApiResponse>(
      'https://api.github.com/users/' + username + '/repos'
    );
    return await lastValueFrom(fetchData)
      .then((response) => (this.repos = response))
      .catch((err) => err);
  }
}
