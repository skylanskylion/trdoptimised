import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCoronavirusStoriesComponent } from './submit-coronavirus-stories.component';

describe('SubmitCoronavirusStoriesComponent', () => {
  let component: SubmitCoronavirusStoriesComponent;
  let fixture: ComponentFixture<SubmitCoronavirusStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCoronavirusStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCoronavirusStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
