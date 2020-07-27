import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInerviewDiscussComponent } from './the-inerview-discuss.component';

describe('TheInerviewDiscussComponent', () => {
  let component: TheInerviewDiscussComponent;
  let fixture: ComponentFixture<TheInerviewDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheInerviewDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInerviewDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
