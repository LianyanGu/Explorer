import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipDialogueComponent } from './tip-dialogue.component';

describe('TipDialogueComponent', () => {
  let component: TipDialogueComponent;
  let fixture: ComponentFixture<TipDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
