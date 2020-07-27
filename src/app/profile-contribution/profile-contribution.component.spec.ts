import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContributionComponent } from './profile-contribution.component';

describe('ProfileContributionComponent', () => {
  let component: ProfileContributionComponent;
  let fixture: ComponentFixture<ProfileContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
