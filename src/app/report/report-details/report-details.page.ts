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
      this.report = JSON.parse(res._body)[0];
      this.userService.dismiss();
    });
  }

  booleanToString(input: any) {
    return String(input).toString();
  }

  transform(value) {
    switch (value) {
      case 'true':
        return 'نعم';
      case 'false':
        return 'لا';
      case '1':
        return 'نعم';
      case '0':
        return 'لا';
      case 'director':
        return 'المدير';
      case 'manager':
        return 'مشرف عام';
      case 'supervisor':
        return 'مشرف خيمة';
      case 'aidesup':
        return 'مشرف مساعد';
      case 'supervisor':
        return 'مشرف خيمة';
      case 'aidesup':
        return 'مشرف مساعد';
      case 'inter':
        return 'عميل';
      case 'jure':
        return 'لجنة الرقابة';
      case 'mission':
        return 'مهمات خاصة';
      case 'aidejure':
        return 'مساعد لجنة الرقابة';
      default:
        return '';
    }
  }
}
