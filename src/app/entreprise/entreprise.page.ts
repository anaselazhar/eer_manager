import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-entreprise',
  templateUrl: 'entreprise.page.html',
  styleUrls: ['entreprise.page.scss'],
})
export class EntreprisePage {
  entreprise: any = {};
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService
  ) {}

  dashBoardPage() {
    this.navCtrl.navigateForward('myPage');
  }

  addEntreprise() {

  }
}
