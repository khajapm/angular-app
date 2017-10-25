import { Component, AfterViewInit } from '@angular/core';
import { ForumService } from '../core/forum.service';
import { initViz } from '../../tableau_scripts/viz';
import { Report } from '../comment/models/report.model';

@Component({
    selector:'forum-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.css']
})
export class ReportComponent implements AfterViewInit{
  
    private report: Report; 

    constructor(private fs: ForumService){
    }

    ngAfterViewInit(): void{
        this.fs.getForumDetails().subscribe((data) => {
          this.report = data;
          console.log(data);
          //initViz(this.report.reportUrl);
       }); 
    }

}