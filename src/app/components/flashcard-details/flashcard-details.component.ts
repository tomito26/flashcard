import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/flash-card/topic';

@Component({
  selector: 'app-flashcard-details',
  templateUrl: './flashcard-details.component.html',
  styleUrls: ['./flashcard-details.component.css']
})
export class FlashcardDetailsComponent implements OnInit {
  @Input() topic: Topic | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
