import {TheInterviewModule} from './the-interview.module';

describe('TheInterviewModule', () => {
  let theInterviewModule: TheInterviewModule;

  beforeEach(() => {
    theInterviewModule = new TheInterviewModule();
  });

  it('should create an instance', () => {
    expect(theInterviewModule).toBeTruthy();
  });
});
