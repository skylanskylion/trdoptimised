import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEventComponent } from './presentation-event.component';

describe('PresentationEventComponent', () => {
  let component: PresentationEventComponent;
  let fixture: ComponentFixture<PresentationEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
