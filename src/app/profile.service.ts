import { Injectable } from '@angular/core';
import {  Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class ProfileService {
  private username: string;
  // private clientId = 'bccf4438d8217bd2f7b9';
  // private clientSecret = '50f32471a76897f37e628d7933981b82dfea1ab8';
  private client_id = environment.clientId;
  private client_secret = environment.clientSecret;
  constructor(private http: Http) {
    console.log('service is ready');
    this.username = 'muturi254';
   }
   getProfile() {
     return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret='
      + this.client_secret)
    .map(res => res.json());
   }
   getProfileRepos() {
     return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret='
      + this.client_secret)
    .map(res => res.json());
   }

  updateProfile(username: string) {
      this.username = username;
  }
}
