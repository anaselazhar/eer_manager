import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tent',
  templateUrl: 'tent.page.html',
  styleUrls: ['tent.page.scss'],
})
export class TentPage {
  constructor(public navCtrl: NavController) {}

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
