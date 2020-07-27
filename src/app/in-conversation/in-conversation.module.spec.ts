import {InConversationModule} from './in-conversation.module';

describe('InConversationModule', () => {
  let inConversationModule: InConversationModule;

  beforeEach(() => {
    inConversationModule = new InConversationModule();
  });

  it('should create an instance', () => {
    expect(inConversationModule).toBeTruthy();
  });
});
