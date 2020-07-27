import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RevolutionTalkComponent} from './revolution-talk.component';

describe('RevolutionTalkComponent', () => {
  let component: RevolutionTalkComponent;
  let fixture: ComponentFixture<RevolutionTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RevolutionTalkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolutionTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
