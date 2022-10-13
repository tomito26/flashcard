import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { FlashcardDetailsComponent } from './components/flashcard-details/flashcard-details.component';
import { FlashcardformsComponent } from './components/flashcardforms/flashcardforms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlashcardComponent,
    FlashcardListComponent,
    FlashcardDetailsComponent,
    FlashcardformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
