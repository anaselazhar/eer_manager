import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';
import { LoginPage } from '../login/login.page';
import { ValueService } from '../providers/value-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss']
})
export class SignUpPage implements OnInit {
  principal: any = {};
  managers: any[] = [];
  supervisors: any[] = [];
  inters: any[] = [];
  juries: any[] = [];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService,
    public valueService: ValueService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignup');
  }

  ngOnInit(): void {
    this.valueService.getAllInters().subscribe((res: any) => this.inters = res);
    this.valueService.getAllJuries().subscribe((res: any) => this.juries = res);
    this.valueService.getAllManagers().subscribe((res: any) => this.managers = res);
    this.valueService.getAllSupervisors().subscribe((res: any) => this.supervisors = res);
  }

  dashBoardPage() {
    this.navCtrl.navigateForward('myPage');
  }

  async register() {
    console.log(this.principal);
    /* stop this call for now
    this.userService.register(this.principal).subscribe(
      async (res) => {
        const toast = await this.toastCtrl.create({
          message: 'Account was added successfully',
          duration: 5000
        });
        toast.present();
        this.principal = {};
      },
      async (err) => {
        if (err.status === 300) {
          const toast = await this.toastCtrl.create({
            message: 'Email aleray exist',
            duration: 3000
          });
          toast.present();
        } else if (err.status === 400) {
          console.log(err);
        }
      }
    );*/
  }
}
