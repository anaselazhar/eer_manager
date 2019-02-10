import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: 'report-details.page.html',
  styleUrls: ['report-details.page.scss']
})
export class ReportDetailsPage implements OnInit {
  payload: any = {};
  report: any = {
    assistants: [
      {
        Id_Number: '2',
        Name_Person: 'anas',
        assistanceDate: '2019-01-01T00:00:00Z',
        assistantOfficialDress: true
      },
      {
        Id_Number: '3',
        Name_Person: 'ahmed',
        assistanceDate: '2019-01-01T00:00:00Z',
        assistantOfficialDress: true
      }
    ],
    camp: '12',
    supervisor: 'hatim',
    supervisorId: '1',
    supervisorNotes: true,
    supervisorOfficialDress: false,
    id: 1
  };

  constructor(
    public navCtrl: NavController,
    private activeRoute: ActivatedRoute
  ) {
    this.payload.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.payload);
  }

  ngOnInit() {
    // TODO
  }

  booleanToString(input: any) {
    return String(input).toString();
  }
}
