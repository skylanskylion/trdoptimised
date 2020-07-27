import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IagesLiveUpdatesComponent } from './iages-live-updates.component';

describe('IagesLiveUpdatesComponent', () => {
  let component: IagesLiveUpdatesComponent;
  let fixture: ComponentFixture<IagesLiveUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IagesLiveUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IagesLiveUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
