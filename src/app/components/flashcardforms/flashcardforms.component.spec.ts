import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardformsComponent } from './flashcardforms.component';

describe('FlashcardformsComponent', () => {
  let component: FlashcardformsComponent;
  let fixture: ComponentFixture<FlashcardformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
