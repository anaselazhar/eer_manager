import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/providers/user-service';

@Component({
  selector: 'app-report-details',
  templateUrl: 'report-details.page.html',
  styleUrls: ['report-details.page.scss']
})
export class ReportDetailsPage implements OnInit {
  payload: any = {};
  report: any = {};

  constructor(
    public navCtrl: NavController,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.payload.id = this.activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.present();
    this.userService.getReportById(this.payload.id).subscribe((res: any) => {
      this.report = JSON.parse(res._body);
      console.log(this.report);
      this.userService.dismiss();
    });
  }

  booleanToString(input: any) {
    return String(input).toString();
  }
}
