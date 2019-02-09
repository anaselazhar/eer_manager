import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-work-progress',
  templateUrl: 'work-progress.page.html',
  styleUrls: ['work-progress.page.scss'],
})
export class WorkProgressPage {
  constructor(public navCtrl: NavController) {}

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
