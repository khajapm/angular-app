import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private router;
  private navigtionButtons = [
    { url: '/home', title: 'Home'},
    { url: '/ledger', title: 'Ledgers'},
    // { url: '/comment', title: 'Comment'},
    { url: '/contactus', title: 'Contact Us'},
    { url: '/aboutus', title: 'About Us'}
  ];
  constructor(router: Router) {
    this.router = router;
  }

  public getNavigation() {
    return this.navigtionButtons;
    // return this.navigtionButtons.map((data) => {
    //   var button = {
    //     data: data
    //     //classes: {}
    //   };
      // if (this.router.isActive(data.url)) {
      //   button.classes = {'active': true};
      // }
   // });
  }

  ngOnInit() {
  }

}
