import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';
import { UserService } from '../providers/user-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpPage
      }
    ])
  ],
  providers: [UserService],
  declarations: [SignUpPage]
})
export class SignUpModule {}
