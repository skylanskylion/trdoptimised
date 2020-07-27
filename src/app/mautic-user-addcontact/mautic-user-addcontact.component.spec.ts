import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauticUserAddcontactComponent } from './mautic-user-addcontact.component';

describe('MauticUserAddcontactComponent', () => {
  let component: MauticUserAddcontactComponent;
  let fixture: ComponentFixture<MauticUserAddcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauticUserAddcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauticUserAddcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
