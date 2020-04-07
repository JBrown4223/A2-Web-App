import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {DataManagerService} from '../data-manager.service'
import { EnglishTerms } from '../englishTerms';

@Component({
  selector: 'app-englishTerms',
  templateUrl: './english-terms.component.html',
  styleUrls: ['./english-terms.component.css']
})


export class EnglishTermsComponent implements OnInit {

  constructor( private d: DataManagerService, private router: Router) { }
  iModel: EnglishTerms[];
  ngOnInit() {
    this.d.getTermsEnglish().subscribe( response => this.iModel = response)
  }

  onclick(event) {
    console.log(event)
    this.router.navigate([`/viewTermsEnglish/:id`]);

  }

  


}
