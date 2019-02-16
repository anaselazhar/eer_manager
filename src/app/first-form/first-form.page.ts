import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';
import { ValueService } from '../providers/value-service';

@Component({
  selector: 'app-first-form',
  templateUrl: 'first-form.page.html',
  styleUrls: ['first-form.page.scss']
})
export class FirstForm implements OnInit {
  firstForm: any = {
    supervisorOfficialDress: false,
    supervisorNotes: false
  };
  daysNumer: any[] = [];
  minutes: any[] = [];
  hours: any[] = [];
  supervisors: any[] = [];
  assistants: any[] = [];
  data: any[] = [];

  isVisible = false;
  payload: any = {
    assistantOfficialDress: false
  };

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public toastCtrl: ToastController,
    private valueService: ValueService
  ) {
    // set inputs data
    for (let i = 0; i < 30; i++) {
      if (i < 9) {
        this.daysNumer.push('0' + (i + 1).toString());
      } else {
        this.daysNumer.push(i + 1);
      }
    }
    for (let i = 0; i <= 59; i++) {
      if (i < 10) {
        this.minutes.push('0' + i.toString());
      } else {
        this.minutes.push(i);
      }
    }
    for (let i = 0; i <= 23; i++) {
      if (i < 10) {
        this.hours.push('0' + i.toString());
      } else {
        this.hours.push(i);
      }
    }
  }

  ngOnInit(): void {
    this.valueService.present();
    this.valueService.getAllSupervisors().subscribe((res: any) => {
      this.supervisors = res;
      this.userService.dismiss();
    });
  }


  addToPayload(payload) {
    this.data.push(payload);
    this.payload = {
      assistantOfficialDress: false
    };
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  foo() {
    this.userService.present();
    this.userService
      .getSupervisorAssistant(this.firstForm.supervisorId)
      .subscribe((result: any) => {
        this.assistants = JSON.parse(result._body);
      });
    this.userService.dismiss();
  }

  async save() {
    console.log(this.firstForm);
    // this.firstForm.aideSupervisor = this.assistantsWithData;
    // this.userService.saveReport(this.firstForm).subscribe(
    //   async (res) => {
    //     const toast = await this.toastCtrl.create({
    //       message: 'Report was saved !',
    //       duration: 3000
    //     });
    //     toast.present();
    //     this.userService.dismiss();
    //     this.firstForm = {
    //       supervisorOfficialDress: false,
    //       supervisorNotes: false
    //     };
    // }, async (err) => {
    //   if (err.status === 300) {
    //     const toast = await this.toastCtrl.create({
    //       message: 'Error',
    //       duration: 3000
    //     });
    //     toast.present();
    //     this.userService.dismiss();
    //   }
    // });
  }
}
