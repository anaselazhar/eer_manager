import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';
import { ValueService } from '../providers/value-service';

@Component({
  selector: 'app-third-form',
  templateUrl: 'third-form.page.html',
  styleUrls: ['third-form.page.scss']
})
export class ThirdFormPage implements OnInit {
  daysNumer: any[] = [];
  hours: any[] = [];
  report: any = {};
  payload: any = {};

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    private valueService: ValueService
  ) {
    // set inputs data
    for (let i = 0; i < 30; i++) {
      if (i < 9) {
        this.daysNumer.push('0' + (i + 1).toString());
      } else {
        this.daysNumer.push(i + 1);
      }
    }
  }

  ngOnInit(): void {
    // none
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  add() {
    console.log(this.report);
  }
}
