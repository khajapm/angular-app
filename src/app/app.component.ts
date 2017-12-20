import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private router;

  constructor(router: Router) {
    this.router = router;
  }

  public showHeader() {
    return !this.router.isActive('/login');
  }
}
