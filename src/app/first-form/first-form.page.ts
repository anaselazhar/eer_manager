import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(public navCtrl: NavController, public userService: UserService) {}

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

  save() {
    this.firstForm.assistants = this.assistantsWithData;
    console.log(this.firstForm);
  }
}
