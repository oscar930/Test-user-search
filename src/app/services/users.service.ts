import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers: number;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchUsers(query: string): Observable<{items: User[]}> {
    return this.http.get<{ items: User[] }>(`${this.baseUrl}/search/users?q=${query}`);  
  }

  getUserDetails(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${username}`);
  }
}
