import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: 'report-details.page.html',
  styleUrls: ['report-details.page.scss'],
})
export class ReportDetailsPage implements OnInit {
  payload: any = {};

  constructor(public navCtrl: NavController, private activeRoute: ActivatedRoute) {
    this.payload.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.payload);
  }

  ngOnInit() {
    // TODO
  }
}
