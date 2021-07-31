import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  loggedIn: boolean;

  constructor(
    private authService: AuthenticationService
  ) {

    this.authService.isAuthenticated()
    .subscribe(
      (loggedIn => {
        if (!loggedIn) {
          this.loggedIn = true        }
      })
    );

   }

  ngOnInit() {}

  async signOut() {
    this.authService.signOut()
  }

  signIn () {
    
  }
  



}
