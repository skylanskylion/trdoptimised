import { RevolutionTalkModule } from './revolution-talk.module';

describe('RevolutionTalkModule', () => {
  let revolutionTalkModule: RevolutionTalkModule;

  beforeEach(() => {
    revolutionTalkModule = new RevolutionTalkModule();
  });

  it('should create an instance', () => {
    expect(revolutionTalkModule).toBeTruthy();
  });
});
