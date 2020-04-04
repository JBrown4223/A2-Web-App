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
  id: String;

  constructor(private d: DataManagerService, private router: Router, private route: ActivatedRoute) {
    this.term._id='';
    this.term.wordEnglish='';
    this.term.wordNonEnglish='';
    this.term.wordExpanded='';
    this.term.languageCode='';
    this.term.image='';
    this.term.imageType='';  
    this.term.audio=''; 
    this.term.audioType='';
    this.term.linkAuthoritative='';
    this.term.linkWikipedia='';
    this.term.linkYouTube='';
    this.term.authorName='';
    this.term.dateCreated=new Date(); 
    this.term.dateRevised= new Date();
    this.term.fieldOfStudy='';    
    this.term.helpYes= 0; 
    this.term.helpNo=0; 
    this.term._v=0; 
    this.term.definitions= [new Definitions()];
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.d.getTermByIdEnglish(this.id).subscribe(u =>{
      this.term = u;
    });
  }
  onSubmit(){
    this.router.navigate(['/englishTerms']); //Back to View All Component
  }

  edit(){
    this.router.navigate([]); //To Edit Term Component
  }

  otherLangs(){
    this.router.navigate([]); //To View some or all of non-english terms
  }

}
