import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgePartnerProposalComponent } from './knowledge-partner-proposal.component';

describe('KnowledgePartnerProposalComponent', () => {
  let component: KnowledgePartnerProposalComponent;
  let fixture: ComponentFixture<KnowledgePartnerProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgePartnerProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgePartnerProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
