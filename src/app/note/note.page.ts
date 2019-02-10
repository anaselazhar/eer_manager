import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-note',
  templateUrl: 'note.page.html',
  styleUrls: ['note.page.scss']
})
export class NotePage implements OnInit {
  messages: any[] = [];
  constructor(
    private navController: NavController,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.userService.data !== {}) {
      this.userService.present();
      this.userService
        .getAllMessages(this.userService.data.id)
        .subscribe((res: any) => {
          this.messages = JSON.parse(res._body);
          this.userService.dismiss();
        });
    }
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

  details(message: any) {
    const idSend = message.idUser;
    const idReceive =
      this.userService.data === {} ? 0 : this.userService.data.id;
    this.navController.navigateForward(
      'note-details/' + idReceive.toString() + '/' + idSend.toString()
    );
  }

  dashBoardPage() {
    this.navController.navigateForward('workProgress');
  }

  newMessage() {
    this.navController.navigateForward('newMessage');
  }
}
