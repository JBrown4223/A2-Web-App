import { Component, OnInit } from '@angular/core';
import { EnglishTerms} from '../englishTerms';
import { DataManagerService } from '../data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Definitions } from '../definitions';

@Component({
  selector: 'app-viewEnglishTerm',
  templateUrl: './viewEnglishTerm.component.html', 
  styleUrls: ['./viewEnglishTerm.component.css']
})
export class ViewEnglishTermComponent implements OnInit {
  term: EnglishTerms;
  

  constructor(private d: DataManagerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.d.getTermByIdNonEnglish(id).subscribe(u => this.term = u.data)
  }
  



}
