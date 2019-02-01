import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss'],
})
export class ReportPage {

  constructor(private navController: NavController) {}
  details(id: number) {
    this.navController.navigateForward('report-details/' + id.toString());
  }
}
