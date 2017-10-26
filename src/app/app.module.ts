import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ReportComponent } from './report/report.component';
import { CommentComponent } from './comment/comment.component';

import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import {ButtonModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    CommentComponent,
    LoginComponent,
    HomeComponent,
    SideNavComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,

    //routes
    RouterModule.forRoot(appRoutes),

    //user defined modules
    CoreModule,

    //material module
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
