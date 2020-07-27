import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaiconpollsComponent } from './vaiconpolls.component';

describe('VaiconpollsComponent', () => {
  let component: VaiconpollsComponent;
  let fixture: ComponentFixture<VaiconpollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaiconpollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaiconpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
