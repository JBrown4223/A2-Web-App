import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { EnglishTermsComponent } from './english-terms/english-terms.component';
import { ViewEnglishTermComponent } from './viewEnglishTermDetail/viewEnglishTerm.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddTermComponent } from './add-term/add-term.component';
import { AddDefinitionComponent } from './add-definition/add-definition.component';
import { NonEnglishTermsComponent } from './non-english-terms/non-english-terms.component';
import { NonEnglishTermDetailsComponent } from './non-english-term-details/non-english-term-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    EnglishTermsComponent,
    ViewEnglishTermComponent,
    AboutComponent,
    ContactComponent,
    AddTermComponent,
    AddDefinitionComponent,
    NonEnglishTermsComponent,
    NonEnglishTermDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
