import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-first-form',
  templateUrl: 'first-form.page.html',
  styleUrls: ['first-form.page.scss'],
})
export class FirstForm implements OnInit {
  firstForm: any = {
    supervisorOfficialDress: false,
    supervisorNotes: false
  };
  camps: any[] = [];
  supervisor: any = {};
  assistants: any[] = [];
  assistantsWithData: any[] = [];

  isVisible = false;

  constructor(public navCtrl: NavController, public userService: UserService, public toastCtrl: ToastController) {}

  ngOnInit(): void {
    this.userService.present();
    this.userService.getAllTents().subscribe((res: any) => {
      this.camps = JSON.parse(res._body);
      this.userService.dismiss();
    });
  }

  goTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  foo() {
    this.userService.present();
    this.userService.getSupervisorByTent(this.firstForm.camp).subscribe((res: any) => {
      this.supervisor = JSON.parse(res._body);
      this.firstForm.supervisor = this.supervisor.Name_Person;
      this.firstForm.supervisorId = this.supervisor.Id_Number;
      this.isVisible = true;
      this.userService.getSupervisorAssistant(this.firstForm.camp).subscribe((result: any) => {
        this.assistants = JSON.parse(result._body);
        this.assistantsWithData = this.assistants.map((item: any) => {
          return {
            Id_Number: item.Id_Number,
            Name_Person: item.Name_Person,
            assistanceDate: null,
            assistantOfficialDress: false
          };
        });
        console.log(this.assistants);
        this.userService.dismiss();
      });
    });
  }

  async save() {
    this.firstForm.aideSupervisor = this.assistantsWithData;
    this.userService.saveReport(this.firstForm).subscribe(
      async (res) => {
        const toast = await this.toastCtrl.create({
          message: 'Report was saved !',
          duration: 3000
        });
        toast.present();
        this.userService.dismiss();
        this.firstForm = {
          supervisorOfficialDress: false,
          supervisorNotes: false
        };

    }, async (err) => {
      if (err.status === 300) {
        const toast = await this.toastCtrl.create({
          message: 'Error',
          duration: 3000
        });
        toast.present();
        this.userService.dismiss();
      }
    });
  }
}
