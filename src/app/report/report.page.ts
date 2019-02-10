import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss'],
})
export class ReportPage implements OnInit {
  reports: any[] = [];
  constructor(private navController: NavController, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.present();
    this.userService.getAllSupervisorReport().subscribe((res: any) => {
      this.reports = JSON.parse(res._body);
      this.userService.dismiss();
    });
  }

  details(id: number) {
    this.navController.navigateForward('report-details/' + id.toString());
  }
}
