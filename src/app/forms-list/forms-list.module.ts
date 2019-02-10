import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormsListPage } from './forms-list.page';
import { UserService } from '../providers/user-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormsListPage
      }
    ])
  ],
  declarations: [FormsListPage]
})
export class FormsListPageModule {}
