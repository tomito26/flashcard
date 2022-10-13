import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/flash-card/topic';
import { Quote } from 'src/app/quote-class/quote';
import { FlashcardService } from 'src/app/service/flashcard.service';
import { QuoteService } from 'src/app/service/quote.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  topics!: Topic[];
  quote!: Quote;

  constructor(flashcard: FlashcardService, private quoteService:QuoteService) { 
    this.topics = flashcard.getFlashcard();
  }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe(data =>{
      // succesful api request
      this.quote = new Quote(data.author,data.quote)
    },err=>{
      this.quote = new Quote('Winstone churchill',"Never give up")
      console.log('an error occurred')
    })
  }

}
