import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContributionComponent } from './register-contribution.component';

describe('RegisterContributionComponent', () => {
  let component: RegisterContributionComponent;
  let fixture: ComponentFixture<RegisterContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
