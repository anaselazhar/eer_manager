import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';
import { ValueService } from '../providers/value-service';

@Component({
  selector: 'app-restaurant',
  templateUrl: 'restaurant.page.html',
  styleUrls: ['restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  tents: any[] = [];
  juryInspections: any[] = [];
  restaurant: any = {};

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService,
    public valueService: ValueService
  ) {}

  ngOnInit(): void {
    this.valueService.getAlltents().subscribe((res: any) => this.tents = res);
    this.valueService.getAllJuriesInspections().subscribe((res: any) => this.juryInspections = res);
  }

  dashBoardPage() {
    this.navCtrl.navigateForward('myPage');
  }

  addRestaurant() {
    // TODO
  }

  addEntreprise() {
    // TODO
  }
}
