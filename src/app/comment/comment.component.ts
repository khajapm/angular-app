import { Component, OnInit } from '@angular/core';
import { ForumService } from '../core/forum.service';
import { Report } from '../comment/models/report.model';

@Component({
    selector:'forum-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.css']
})
export class CommentComponent implements OnInit{
   
   reportDetails:Report;

   constructor(private fs: ForumService){
   }
   
   ngOnInit(){
        this.fs.getForumDetails().subscribe((data) => {
          this.reportDetails = data;
       }); 
   }
}