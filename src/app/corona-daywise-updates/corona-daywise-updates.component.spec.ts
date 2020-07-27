import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaDaywiseUpdatesComponent } from './corona-daywise-updates.component';

describe('CoronaDaywiseUpdatesComponent', () => {
  let component: CoronaDaywiseUpdatesComponent;
  let fixture: ComponentFixture<CoronaDaywiseUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaDaywiseUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaDaywiseUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
