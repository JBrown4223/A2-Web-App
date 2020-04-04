import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// Import data model classes, for example...
import {Definitions} from './definitions';
import {EnglishTerms} from './englishTerms';
import {NonEnglishTerms} from './nonEnglishTerms';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

  // Base URL for the web API
  private url: string = 'https://calm-mountain-03246.herokuapp.com/';

  // Callable methods...
  // For each entity, as appropriate, get, add, edit, delete
  
 //============== English Terms ===== //
  
    //Get All
    getTermsEnglish(): Observable<EnglishTerms[]> {
        return this.http.get<EnglishTerms[]>(`${this.url}/api/terms/english`)
    }
    //Get One
    getTermByIdEnglish(id: String): Observable<any>{
        return this.http.get<any>(`${this.url}/api/terms/english/${id}`)
    }

    //Get Some, All
    getTermsFromText(text: String): Observable<any>{
        return this.http.get<any>(`${this.url}/api/terms/english/:${text}`)
    }

    //Add New
   addNewTermEnglish(credentials: EnglishTerms): Observable<any>{
       return this.http.post<any>(`${this.url}/api/terms/english`, credentials)
    }

    //Add New Definition
    addEnglishDefinition(credentials: Definitions, id: String) : Observable<any> {
       return this.http.put<any>(`${this.url}/api/terms/english/addDefinition/:${id}`,credentials)
    }

   //Increase the Is Helpful of a term
   isHelpful(creditials: EnglishTerms, id: String): Observable<any>{
       return this.http.put<any>(`${this.url}/api/terms/english/addYes/:${id}`, creditials)
   }
   //Increase the not Helpful of a term
   isNotHelpful(creditials: EnglishTerms, id: String): Observable<any>{
       return this.http.put<any>(`${this.url}/api/terms/english/addNo/:${id}`, creditials)
   }

   //Increase Definition Likes
   defLikes(credentials: Definitions, id: String): Observable<any>{
       return this.http.put<any>(`${this.url}/api/terms/english/addLikes/:id:${id}`, credentials)
   }




  //======= NonEnglish Terms ==== ///
  
    getTermsNonEnglish(): Observable<NonEnglishTerms[]>{
        return this.http.get<NonEnglishTerms[]>(`${this.url}/api/terms/other`)
    }

    //Get One
    getTermByIdNonEnglish(id: String): Observable<any>{
        return this.http.get<any>(`${this.url}/api/terms/other/${id}`)
    }

    //Get Some, All
    getNonEnglishFromText(text: String): Observable<any>{
        return this.http.get<any>(`${this.url}/api/terms/other/:${text}`)
    }

    //Add New
    addNonEnglishTerm(credentials: NonEnglishTerms): Observable<any>{
        return this.http.post<any>(`${this.url}/api/terms/other`, credentials)
    }

    //Add New Definition
    addNonEnglishDefinition(credentials: Definitions, id: String) : Observable<any> {
     return this.http.put<any>(`${this.url}/api/terms/other/addDefinition/:${id}`,credentials)
    }

    //Increase the Is Helpful of a term
    isHelpfulNonEng(creditials: NonEnglishTerms, id: String): Observable<any>{
     return this.http.put<any>(`${this.url}/api/terms/other/addYes/:${id}`, creditials)
    }
    
    //Increase the not Helpful of a term
    isNotHelpfulNonEng(creditials: NonEnglishTerms, id: String): Observable<any>{
        return this.http.put<any>(`${this.url}/api/terms/other/addNo/:${id}`, creditials)
    }

    //Increase Definition Likes
    nonEngDefLikes(credentials: Definitions, id: String): Observable<any>{
        return this.http.put<any>(`${this.url}/api/terms/other/addLikes/:id:${id}`, credentials)
    }


}



  



