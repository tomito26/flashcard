import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Topic } from 'src/app/flash-card/topic';


@Component({
  selector: 'app-flashcardforms',
  templateUrl: './flashcardforms.component.html',
  styleUrls: ['./flashcardforms.component.css']
})
export class FlashcardformsComponent implements OnInit {
  newTopic: Topic = new Topic(0,"","",new Date());
  @Output() createNewFlashcard = new EventEmitter<Topic>();

  createFlashcard(){
    if(this.newTopic.name && this.newTopic.definition && this.newTopic.date){
      this.createNewFlashcard.emit(this.newTopic);
    }else{
      alert("Kindly fill the form")
    }
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
