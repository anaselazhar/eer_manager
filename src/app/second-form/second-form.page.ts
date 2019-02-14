import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';
import { ValueService } from '../providers/value-service';


@Component({
  selector: 'app-second-form',
  templateUrl: 'second-form.page.html',
  styleUrls: ['second-form.page.scss'],
})
export class SecondFormPage implements OnInit {
  daysNumer = 29;
  allAideSup: any[] = [];
  reportAidSups: any [] = [];
  report: any = {};
  payload: any = {};

  constructor(public navCtrl: NavController, public userService: UserService, private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.getAllAideSups().subscribe((res: any) => this.allAideSup = res );
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  add() {
    this.report.aidSups = this.reportAidSups;
  }

  addAidSupToArray(payload: any) {
    this.reportAidSups.push(payload);
  }

}
