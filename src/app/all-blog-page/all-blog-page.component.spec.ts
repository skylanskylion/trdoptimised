import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogPageComponent } from './all-blog-page.component';

describe('AllBlogPageComponent', () => {
  let component: AllBlogPageComponent;
  let fixture: ComponentFixture<AllBlogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBlogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
