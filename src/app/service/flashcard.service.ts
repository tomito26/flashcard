import { Injectable } from '@angular/core';
import { topics } from '../flashcardList';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
getFlashcard(){
  return topics;
}

  constructor() { }
}
