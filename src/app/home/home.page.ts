import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, public userService: UserService) {}

  ngOnInit(): void {
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
