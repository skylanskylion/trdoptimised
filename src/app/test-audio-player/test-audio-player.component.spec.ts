import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAudioPlayerComponent } from './test-audio-player.component';

describe('TestAudioPlayerComponent', () => {
  let component: TestAudioPlayerComponent;
  let fixture: ComponentFixture<TestAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
