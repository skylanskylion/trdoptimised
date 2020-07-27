import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdateSinglepageComponent } from './live-update-singlepage.component';

describe('LiveUpdateSinglepageComponent', () => {
  let component: LiveUpdateSinglepageComponent;
  let fixture: ComponentFixture<LiveUpdateSinglepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUpdateSinglepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUpdateSinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
