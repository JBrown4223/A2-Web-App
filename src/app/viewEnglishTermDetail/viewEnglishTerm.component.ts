import { Component, OnInit } from '@angular/core';
import { EnglishTerms} from '../englishTerms';
import { DataManagerService } from '../data-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewEnglishTerm',
  templateUrl: './viewEnglishTerm.component.html', 
  styleUrls: ['./viewEnglishTerm.component.css']
})
export class ViewEnglishTermComponent implements OnInit {
  

  constructor(private d: DataManagerService, private route: ActivatedRoute) {
  }
  term: EnglishTerms;
  id = this.route.snapshot.params['id'];

  ngOnInit() {
   
    this.d.getTermByIdEnglish(this.id).subscribe(u =>{ 
      this.term = u; })
  }
  
  like(){

  }
  helpYes(){
    this.d.isHelpful(this.term, this.id).subscribe(u =>{ 
      this.term.helpYes = u; })
  }

  helpNo(){
    this.d.isNotHelpful(this.term, this.id).subscribe(u =>{ 
      this.term.helpNo = u; })
  }

}
