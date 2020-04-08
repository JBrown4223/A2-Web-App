import { Component, OnInit } from '@angular/core';
import { EnglishTerms} from '../englishTerms';
import { DataManagerService } from '../data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { NonEnglishTerms } from '../nonEnglishTerms';

@Component({
  selector: 'app-nonEnglishTermDetails',
  templateUrl: './non-english-term-details.component.html',
  styleUrls: ['./non-english-term-details.component.css']
})
export class NonEnglishTermDetailsComponent implements OnInit {

  constructor(private d: DataManagerService, private route: ActivatedRoute) {
  }
  term: NonEnglishTerms;
  id = this.route.snapshot.params['id'];

  ngOnInit() {
   
    this.d.getTermByIdNonEnglish(this.id).subscribe(u =>{ 
      this.term = u; })
  }
  
  like(){

  }
  helpYes(){
    this.d.isHelpfulNonEng(this.term, this.id).subscribe(u =>{ 
      this.term.helpYes = u; })
  }

  helpNo(){
    this.d.isNotHelpfulNonEng(this.term, this.id).subscribe(u =>{ 
      this.term.helpNo = u; })
  }
}
