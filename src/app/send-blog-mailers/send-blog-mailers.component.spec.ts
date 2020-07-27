import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBlogMailersComponent } from './send-blog-mailers.component';

describe('SendBlogMailersComponent', () => {
  let component: SendBlogMailersComponent;
  let fixture: ComponentFixture<SendBlogMailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendBlogMailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendBlogMailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
