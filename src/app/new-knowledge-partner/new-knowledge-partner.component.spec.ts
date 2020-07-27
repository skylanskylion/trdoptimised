import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKnowledgePartnerComponent } from './new-knowledge-partner.component';

describe('NewKnowledgePartnerComponent', () => {
  let component: NewKnowledgePartnerComponent;
  let fixture: ComponentFixture<NewKnowledgePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKnowledgePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKnowledgePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
