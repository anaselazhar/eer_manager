import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReportDetailsPage } from './report-details.page';
import { ToArabFormat } from '../../pipes/to-arab.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportDetailsPage
      }
    ])
  ],
  declarations: [ReportDetailsPage, ToArabFormat]
})
export class ReportDetailsPageModule {}
