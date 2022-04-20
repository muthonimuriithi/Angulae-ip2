import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubSearchService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', 0, '');
    this.http = http;
  }
  // update
  async getUser(username: string) {
    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
    }
    const fetchData = this.http.get<ApiResponse>(
      'https://api.github.com/users/' + username
    );
    return await lastValueFrom(fetchData)
      .then((response) => {
        this.user.login = response.login;
        this.user.id = response.id;
        this.user.avatar_url = response.avatar_url;
        console.log(response);
        return this.user;
      })
      .catch((err) => {
        return err;
      });
  }
}
