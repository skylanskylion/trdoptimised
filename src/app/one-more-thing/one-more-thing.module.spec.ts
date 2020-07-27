import {OneMoreThingModule} from './one-more-thing.module';

describe('OneMoreThingModule', () => {
  let oneMoreThingModule: OneMoreThingModule;

  beforeEach(() => {
    oneMoreThingModule = new OneMoreThingModule();
  });

  it('should create an instance', () => {
    expect(oneMoreThingModule).toBeTruthy();
  });
});
