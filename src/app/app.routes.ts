import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';

export const appRoutes : Routes = [
   {path:'', redirectTo:'login', pathMatch:'full'},
   {path:'login', component:LoginComponent},
   {path:'reports', component:ReportComponent},
   {path:'home', component:HomeComponent}
]