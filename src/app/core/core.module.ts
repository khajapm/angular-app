import { NgModule } from '@angular/core';
import { StoreService } from './services/store.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [],
  exports: [],
  providers: [StoreService],
})
export class CoreModule { }
