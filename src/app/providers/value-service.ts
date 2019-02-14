import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { of } from 'rxjs';

import {
  managers_mock,
  supervisors_mock,
  inters_mock,
  jurys_mock,
  entreprises_mock,
  tents_mock,
  juryIspection_mock,
  aideSup_mock
} from '../mock/mock-data';

@Injectable()
export class ValueService {
  private apiUri = 'http://association.qpixel-vertualization.com/api/';
  public data: any = {};
  isLoading = false;

  constructor(private _http: Http, public loadingCtrl: LoadingController) {}

  async present() {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        duration: 5000
      })
      .then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl
      .dismiss()
      .then(() => console.log('dismissed'));
  }

  // simulate real api call, for now this is ok !!
  // IMPORTANT: TO CHANGE WHEN API IS READY
  getAllManagers() {
    const items = managers_mock;
    const items$ = of(items);
    return items$;
  }

  getAllSupervisors() {
    const items = supervisors_mock;
    const items$ = of(items);
    return items$;
  }

  getAllInters() {
    const items = inters_mock;
    const items$ = of(items);
    return items$;
  }

  getAllJuries() {
    const items = jurys_mock;
    const items$ = of(items);
    return items$;
  }

  getAllEntreprises() {
    const items = entreprises_mock;
    const items$ = of(items);
    return items$;
  }

  getAlltents() {
    const items = tents_mock;
    const items$ = of(items);
    return items$;
  }

  getAllJuriesInspections() {
    const items = juryIspection_mock;
    const items$ = of(items);
    return items$;
  }

  getAllAideSups() {
    const items = aideSup_mock;
    const items$ = of(items);
    return items$;
  }
}
