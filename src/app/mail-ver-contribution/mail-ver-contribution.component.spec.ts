import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailVerContributionComponent } from './mail-ver-contribution.component';

describe('MailVerContributionComponent', () => {
  let component: MailVerContributionComponent;
  let fixture: ComponentFixture<MailVerContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailVerContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailVerContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
