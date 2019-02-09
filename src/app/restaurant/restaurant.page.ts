import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-restaurant',
  templateUrl: 'restaurant.page.html',
  styleUrls: ['restaurant.page.scss'],
})
export class RestaurantPage {
  restaurant: any = {};
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService
  ) {}

  dashBoardPage() {
    this.navCtrl.navigateForward('myPage');
  }

  addRestaurant() {

  }
}
