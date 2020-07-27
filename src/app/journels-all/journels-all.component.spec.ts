import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournelsAllComponent } from './journels-all.component';

describe('JournelsAllComponent', () => {
  let component: JournelsAllComponent;
  let fixture: ComponentFixture<JournelsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournelsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournelsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
