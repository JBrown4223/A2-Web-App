import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Definitions } from '../definitions';
import { request } from 'http';

@Component({
  selector: 'app-add-definition',
  templateUrl: './add-definition.component.html',
  styleUrls: ['./add-definition.component.css']
})
export class AddDefinitionComponent implements OnInit {
 newDefinition: Definitions;
 termID: String;


 
  constructor(private d: DataManagerService, private route: ActivatedRoute, private router: Router) { 
    //Initialize Definition object to empty state
   this.newDefinition.authorName = '';
   this.newDefinition.dateCreated = new Date();
   this.newDefinition.definition = '';
   this.newDefinition.quality = 0;
   this.newDefinition.likes = 0;
  }

  



  ngOnInit() {
    this.termID = this.route.snapshot.params['id'];
  }

  onSubmit(event){
    console.log(event);
    this.d.addEnglishDefinition(this.newDefinition,this.termID).subscribe(u => {
      this.newDefinition = u;
      this.router.navigate([`/viem/${this.termID}`]);
    });
  }

}
