import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { EnglishTerms } from '../englishTerms';
import { DataManagerService } from '../data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Languages } from '../languages';
import { Definitions } from '../definitions';

@Component({
  selector: 'app-addTerm',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.css']
})


export class AddTermComponent implements OnInit {
 newWord: EnglishTerms;
 uid: String;
 formError: String;
 defString: String
 

  constructor(private d: DataManagerService, private router: Router, private route: ActivatedRoute) { 
    this.newWord = new EnglishTerms();
    
    //Initialization of new Object to empty state
    this.newWord._id='';
    this.newWord.wordEnglish = '';
    this.newWord.wordNonEnglish = '';
    this.newWord.wordExpanded ='';
    this.newWord.languageCode="en-ca";
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
    this.newWord._v=0;
    this.newWord.definitions= [new Definitions()];
   
  }
  

  ngOnInit() {
    this.uid= this.route.snapshot.params['id']
   
  }

  onSubmit(){ 
    /*
      The function will do the folowing tasks
      1 - Check that all required fields are completed and not null
      2 - Create new englishTerm
     
    */

    if(this.newWord.wordEnglish && this.newWord.authorName && this.newWord.languageCode && this.newWord.dateCreated && this.newWord.dateRevised){
       
      
        this.d.addNewTermEnglish(this.newWord).subscribe(u => {
          this.router.navigate(['/viewEnglishTerm/',this.uid]);
        });

    }
    else{
      console.log("Error: failed to add word");
      this.formError = "Data entry error - all fields are required"
    }




  }

}
