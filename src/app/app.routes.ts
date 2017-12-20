import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LedgerComponent } from './ledger/ledger.component';
import { StoreComponent } from './ledger/store/store.component';
import { InventoryComponent } from './ledger/inventory/inventory.component';
import { ReportsComponent } from './ledger/reports/reports.component';

export const appRoutes: Routes = [
   {path: '', redirectTo: 'login', pathMatch: 'full'},
   {path: 'login', component: LoginComponent},
   {path: 'home', component: HomeComponent},
   {
       path: 'ledger',
       component: LedgerComponent,
       children: [
        {path: 'store', component: StoreComponent},
        {path: 'inventory', component: InventoryComponent},
        {path: 'reports', component: ReportsComponent}
    ]
   },
   {path: 'contactus', component: HomeComponent},
   {path: 'aboutus', component: HomeComponent}
];
