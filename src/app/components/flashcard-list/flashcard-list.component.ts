import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Topic } from 'src/app/flash-card/topic';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {
  @Input() topics!: Topic[] ;
 

  toggleDetails(index: number){
    this.topics[index].isDisplayed = !this.topics[index].isDisplayed
  }

  deleteDetail(deleteFlashCard: boolean,index: number){
    if(deleteFlashCard){
      let confirmDelete =  confirm(`Are you sure you want to delete ${this.topics[index].name}?`)
      if(confirmDelete){
        this.topics.splice(index,1);
      }
    }

  }
  addFlashcard(newTopic: Topic){
   newTopic.id = this.topics.length + 1;
   newTopic.date = new Date(newTopic.date);
   this.topics.push(newTopic);
   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
