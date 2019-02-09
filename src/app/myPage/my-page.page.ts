import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-page',
  templateUrl: 'my-page.page.html',
  styleUrls: ['my-page.page.scss'],
})
export class MyPage {
  constructor(public navCtrl: NavController) {}

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }
}
