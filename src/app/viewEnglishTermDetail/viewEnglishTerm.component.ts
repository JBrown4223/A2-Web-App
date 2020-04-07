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
  

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.d.getTermByIdEnglish(id).subscribe(u =>{ 
      this.term = u; })
  }
  



}
