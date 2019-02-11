import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';
import { ValueService } from '../providers/value-service';

@Component({
  selector: 'app-tent',
  templateUrl: 'tent.page.html',
  styleUrls: ['tent.page.scss'],
})
export class TentPage implements OnInit {

  inters: any[] = [];
  supervisors: any[] = [];
  entreprises: any[] = [];
  tent: any = {};
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService,
    public valueService: ValueService
  ) {}

  ngOnInit(): void {
    this.valueService.getAllInters().subscribe((res: any) => this.inters = res);
    this.valueService.getAllEntreprises().subscribe((res: any) => this.entreprises = res);
    this.valueService.getAllSupervisors().subscribe((res: any) => this.supervisors = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tent');
  }

  dashBoardPage() {
    this.navCtrl.navigateForward('myPage');
  }

  addTent() {
    // TODO
  }
}
