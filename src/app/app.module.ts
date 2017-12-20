import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PieComponent } from './pie/pie.component';
import { appRoutes } from './app.routes';
import { LedgerComponent } from './ledger/ledger.component';
import { StoreComponent } from './ledger/store/store.component';
import { InventoryComponent } from './ledger/inventory/inventory.component';
//import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './core/header/header.component';
import { ReportsComponent } from './ledger/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideNavComponent,
    PieComponent,
    LedgerComponent,
    StoreComponent,
    InventoryComponent,
    //CommentComponent,
    HeaderComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
