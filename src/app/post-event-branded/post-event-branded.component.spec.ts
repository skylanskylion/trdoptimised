import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEventBrandedComponent } from './post-event-branded.component';

describe('PostEventBrandedComponent', () => {
  let component: PostEventBrandedComponent;
  let fixture: ComponentFixture<PostEventBrandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEventBrandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEventBrandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
