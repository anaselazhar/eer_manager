import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/providers/user-service';
import * as _ from 'lodash';

@Component({
  selector: 'app-note-details',
  templateUrl: 'note-details.page.html',
  styleUrls: ['note-details.page.scss']
})
export class NoteDetailsPage implements OnInit {
  payload: any = {};
  messagesDetails: any[] = [];

  constructor(
    public navCtrl: NavController,
    private activeRoute: ActivatedRoute,
    public userService: UserService
  ) {
    this.payload.idSend = this.activeRoute.snapshot.paramMap.get('idRec');
    this.payload.idReceive = this.activeRoute.snapshot.paramMap.get('idUser');
    console.log(this.payload);
  }

  dashBoardPage() {
    this.navCtrl.navigateForward('note');
  }

  ngOnInit() {
    if (this.payload !== {}) {
      this.userService
        .getMessagesBySenderAndReceiver(this.payload)
        .subscribe((res: any) => {
          this.messagesDetails = JSON.parse(res._body);
          console.log(this.messagesDetails);
        });
    }
  }

  newMessage() {
    this.navCtrl.navigateForward('newMessage');
  }

  identifySender(message: any) {
    if (this.userService.data.id === message.SenderUserID) {
      return true;
      console.log(true);
    } else {
      return false;
      console.log(false);
    }
  }
}
