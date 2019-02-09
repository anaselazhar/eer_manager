import { Component } from '@angular/core';
import {
  NavController,
  ToastController,
} from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  credential: any = {};

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLogin');
  }

  homePage() {
    this.navCtrl.navigateForward('home');
  }

  async login() {
    this.userService.present();
    this.userService.login(this.credential).subscribe(
      async (res) => {
        const toast = await this.toastCtrl.create({
          message: 'Welcome!',
          duration: 3000
        });
        toast.present();
        this.userService.userRole = res;
        this.userService.userRole = (JSON.parse(res._body)).role;
        this.userService.dismiss();
        this.homePage();
      },
      async (err) => {
        if (err.status === 300) {
          const toast = await this.toastCtrl.create({
            message: 'Login or Password not valid',
            duration: 3000
          });
          toast.present();
          this.userService.dismiss();
        }
      }
    );
  }
}
