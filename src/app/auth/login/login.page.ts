import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    private authService: AuthenticationService,
    public alertService: AlertService
  ) {}

  ngOnInit() {}

  async signIn() {
    this.authService.signIn(this.username, this.password).subscribe(
      (result) => {
        this.navCtrl.navigateRoot('/tabs');
      },
      async (error) => {
        console.log(error);
        await this.alertService.alert(
          'Login Error',
          error.message || 'Unknown Error!'
        );
      }
    );
  }
}
