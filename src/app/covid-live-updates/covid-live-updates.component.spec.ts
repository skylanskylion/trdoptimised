import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLiveUpdatesComponent } from './covid-live-updates.component';

describe('CovidLiveUpdatesComponent', () => {
  let component: CovidLiveUpdatesComponent;
  let fixture: ComponentFixture<CovidLiveUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidLiveUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidLiveUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
