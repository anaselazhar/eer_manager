import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-forms-list',
  templateUrl: 'forms-list.page.html',
  styleUrls: ['forms-list.page.scss'],
})
export class FormsListPage implements OnInit {
  isManagerOrDirector = false;
  constructor(public navCtrl: NavController, public userService: UserService) {}

  ngOnInit(): void {
    console.log(this.userService.data.userRole);
    this.isManagerOrDirector = this.userService.data.userRole === 'manager'
    || this.userService.data.userRole === 'president' ? true : false;
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
