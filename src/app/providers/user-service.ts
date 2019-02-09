import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class UserService {
  private apiUri = 'http://association.qpixel-vertualization.com/api/';
  public userRole: string = null;
  isLoading = false;

  constructor(private _http: Http, public loadingCtrl: LoadingController) {}

  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  login(credential): Observable<any> {
    const headers = new Headers({ Accept: 'application/json' });
    return this._http.post(this.apiUri + 'user/getUser', credential, {
      headers: headers
    });
  }

  register(principal) {
    const headers = new Headers({ Accept: 'application/json' });
    return this._http.post(this.apiUri + 'user/addUser', principal, {
      headers: headers
    });
  }
}
