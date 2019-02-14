import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-work-progress',
  templateUrl: 'work-progress.page.html',
  styleUrls: ['work-progress.page.scss'],
})
export class WorkProgressPage {
  isManagerOrDirector = false;

  constructor(public navCtrl: NavController, private userService: UserService) {
    this.isManagerOrDirector = this.userService.data.userRole === 'manager' || this.userService.data.userRole === 'director' ? true : false;
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
