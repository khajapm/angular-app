import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  private router;

  private navigationTabs = [
      { url: 'store', title: 'Store'},
      { url: 'inventory', title: 'Inventory' },
      { url: 'reports', title: 'Reports' }
    ];

     constructor(router: Router) {
       this.router = router;
     }
  ngOnInit() {
  }

}
