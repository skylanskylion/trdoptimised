import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IagesLiveUpdatesFormComponent } from './iages-live-updates-form.component';

describe('IagesLiveUpdatesFormComponent', () => {
  let component: IagesLiveUpdatesFormComponent;
  let fixture: ComponentFixture<IagesLiveUpdatesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IagesLiveUpdatesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IagesLiveUpdatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
