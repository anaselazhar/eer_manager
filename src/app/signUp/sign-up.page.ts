import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss']
})
export class SignUpPage {
  principal: any = {};
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignup');
  }

  dashBoardPage() {
    this.navCtrl.navigateForward('myPage');
  }

  async register() {
    this.userService.register(this.principal).subscribe(
      async (res) => {
        const toast = await this.toastCtrl.create({
          message: 'Account was added successfully',
          duration: 5000
        });
        toast.present();
        this.principal = {};
      },
      async (err) => {
        if (err.status === 300) {
          const toast = await this.toastCtrl.create({
            message: 'Email aleray exist',
            duration: 3000
          });
          toast.present();
        } else if (err.status === 400) {
          console.log(err);
        }
      }
    );
  }
}
