import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NotePage } from './note.page';
import { UserService } from '../providers/user-service';
import { ToArabFormat } from './../pipes/to-arab.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotePage
      }
    ])
  ],
  declarations: [NotePage, ToArabFormat]
})
export class NotePageModule {}
