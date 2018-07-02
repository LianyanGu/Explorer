import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDialogueComponent } from './review-dialogue.component';

describe('ReviewDialogueComponent', () => {
  let component: ReviewDialogueComponent;
  let fixture: ComponentFixture<ReviewDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
