import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signUp', loadChildren: './signUp/sign-up.module#SignUpModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tent', loadChildren: './tent/tent.module#TentPageModule' },
  { path: 'entreprise', loadChildren: './entreprise/entreprise.module#EntreprisePageModule' },
  { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'myPage', loadChildren: './myPage/my-page.module#MyPageModule' },
  { path: 'report-details/:id', loadChildren: './report/report-details/report-details.module#ReportDetailsPageModule' },
  { path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
