import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-tent',
  templateUrl: 'tent.page.html',
  styleUrls: ['tent.page.scss'],
})
export class TentPage {
  tent: any = {};
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

  addTent() {

  }
}
