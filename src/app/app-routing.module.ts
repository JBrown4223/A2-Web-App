import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import{HomeComponent} from './home/home.component';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import{EnglishTermsComponent} from './english-terms/english-terms.component';
import{ViewEnglishTermComponent} from './viewEnglishTermDetail/viewEnglishTerm.component';
import {AddTermComponent } from './add-term/add-term.component';
import {AddDefinitionComponent} from './add-definition/add-definition.component';
import {NonEnglishTermsComponent} from './non-english-terms/non-english-terms.component';
import {NonEnglishTermDetailsComponent} from './non-english-term-details/non-english-term-details.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent},
  { path:'englishTerms', component: EnglishTermsComponent},
  { path:'view/:id', component: ViewEnglishTermComponent},
  { path:'addTerm', component: AddTermComponent},
  { path:'addDefinition/:id', component: AddDefinitionComponent},
  //Non-English Routes
  { path:'nonEnglishTerms', component: NonEnglishTermsComponent},
  { path:'viewNonEnglish/:id', component: NonEnglishTermDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
