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
  minutes: any[] = [];
  hours: any[] = [];
  allAideSup: any[] = [];
  reportAidSups: any[] = [];
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
    for (let i = 0; i <= 59; i++) {
      if (i < 9) {
        this.minutes.push('0' + (i).toString());
      } else {
        this.minutes.push(i);
      }
    }
    for (let i = 0; i <= 23; i++) {
      if (i < 9) {
        this.hours.push('0' + (i).toString());
      } else {
        this.hours.push(i);
      }
    }
  }

  ngOnInit(): void {
    this.valueService
      .getAllAideSups()
      .subscribe((res: any) => (this.allAideSup = res));
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  add() {
    this.report.aidSups = this.reportAidSups;
    console.log(this.report);
  }

  addAidSupToArray(payload: any) {
    this.reportAidSups.push(payload);
  }
}
