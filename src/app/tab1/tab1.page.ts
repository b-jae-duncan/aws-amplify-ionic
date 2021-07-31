import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  authSate: any;
  amplifyService: AmplifyService;
  

  constructor(
    public amplify: AmplifyService,
    private authService: AuthenticationService
  ) {

  }

  async ngOnInit() {

  }

  async signOut() {
    this.authService.signOut()
  }
}
