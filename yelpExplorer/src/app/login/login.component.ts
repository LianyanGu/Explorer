import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  public auth2: any;
  result: boolean;
  private clientId = '';

  constructor() {
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
    // this.checkLoginStatus();
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());// Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  signOut() {
    // this.auth2 = gapi.auth2.getAuthInstance();
    this.auth2.signOut();
    console.log('User signed out.');
  }

  // checkLoginStatus() {
  //   this.result = this.auth2.isSignedIn.get();
  //   console.log(this.result);
  // }

  ngAfterViewInit() {
    this.googleInit();
  }

}
