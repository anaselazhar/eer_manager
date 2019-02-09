import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../providers/user-service';

@Component({
  selector: 'app-note',
  templateUrl: 'note.page.html',
  styleUrls: ['note.page.scss'],
})
export class NotePage implements OnInit {
  messages: any[] = [];
  constructor(private navController: NavController, public userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.data !== {}) {
      this.userService.present();
      this.userService.getAllMessages(this.userService.data.id).subscribe((res: any) => {
        this.messages = JSON.parse(res. _body);
        this.userService.dismiss();
      });
    }
  }

  details(message: any) {
    const idSend = message.idUser;
    const idReceive =  this.userService.data === {} ? 0 : this.userService.data.id;
    this.navController.navigateForward('note-details/' + idReceive.toString() + '/' + idSend.toString());
  }

  dashBoardPage() {
    this.navController.navigateForward('workProgress');
  }

  newMessage() {
    this.navController.navigateForward('newMessage');
  }
}
