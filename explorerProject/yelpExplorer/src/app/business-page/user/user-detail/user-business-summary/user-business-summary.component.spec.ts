import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBusinessSummaryComponent } from './user-business-summary.component';

describe('UserBusinessSummaryComponent', () => {
  let component: UserBusinessSummaryComponent;
  let fixture: ComponentFixture<UserBusinessSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBusinessSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBusinessSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
