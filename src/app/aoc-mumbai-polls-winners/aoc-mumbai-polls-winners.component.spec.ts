import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AocMumbaiPollsWinnersComponent } from './aoc-mumbai-polls-winners.component';

describe('AocMumbaiPollsWinnersComponent', () => {
  let component: AocMumbaiPollsWinnersComponent;
  let fixture: ComponentFixture<AocMumbaiPollsWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AocMumbaiPollsWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AocMumbaiPollsWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
