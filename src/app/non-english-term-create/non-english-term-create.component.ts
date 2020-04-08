import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Location} from '@angular/common';
import { NonEnglishTerms } from '../nonEnglishTerms';
import { DataManagerService } from '../data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Languages } from '../languages';
import { Definitions } from '../definitions';

@Component({
  selector: 'app-nonEnglishTerm-create',
  templateUrl: './non-english-term-create.component.html',
  styleUrls: ['./non-english-term-create.component.css']
})
export class NonEnglishTermCreateComponent implements OnInit {

  newWord: NonEnglishTerms;
  temp: Definitions;
  formError: String;
  defString: String
  location: Location;
  id: String;
  LangArray: Array<Languages>;

  constructor(private d: DataManagerService, private router: Router, private route: ActivatedRoute) { 
    this.newWord = new NonEnglishTerms();
    this.temp = new Definitions();
    this.LangArray = [new Languages()]
    //Initialization of new Object to empty state
    this.newWord.wordNonEnglish = '';
    this.newWord.termEnglishId='';
    this.newWord.wordExpanded ='';
    this.newWord.languageCode='';
    this.newWord.image='';
    this.newWord.imageType='';  
    this.newWord.audio ='';
    this.newWord.audioType='';
    this.newWord.linkAuthoritative='';
    this.newWord.linkWikipedia='';
    this.newWord.linkYouTube='';
    this.newWord.authorName='';
    this.newWord.dateCreated= new Date();
    this.newWord.dateRevised= new Date();
    this.newWord.fieldOfStudy='';   
    this.newWord.helpYes=0;
    this.newWord.helpNo =0;
    this.newWord.defString='';

       //Definiton Initialization
       this.temp.authorName= '';
       this.temp.dateCreated = this.newWord.dateCreated;
       this.temp.definition = '';
       this.temp.quality = 0; 
       this.temp.likes = 0;
    this.newWord.definitions =[this.temp];

   
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.newWord.termEnglishId= this.id;
    this.d.getTermByIdEnglish(this.id).subscribe(u =>{
      this.newWord.wordEnglish=u.wordEnglish;
    })
    this.d.getLanguages().subscribe(u =>{
       this.LangArray = u;
    })
  }
  
  onSubmit(){ 
    /*
      The function will do the folowing tasks
      1 - Check that all required fields are completed and not null
      2 - Create new englishTerm
      3 - Redirect to NonEnglishTerms List
     
    */

    if(this.newWord.wordEnglish && this.newWord.authorName && this.newWord.languageCode && this.newWord.dateCreated && this.newWord.dateRevised){
        
 
     
      
      this.d.addNonEnglishTerm(this.newWord).subscribe(u => {
          this.newWord = u;
          this.router.navigate(['/nonEnglishTerms']);
        });

    }
    else{
      console.log("Error: failed to add word");
      this.formError = "Data entry error - all fields are required"
    }




  }

  goBack(){
    this.location.back();
  }
}
