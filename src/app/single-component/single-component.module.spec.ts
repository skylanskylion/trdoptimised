import { SingleComponentModule } from './single-component.module';

describe('SingleComponentModule', () => {
  let singleComponentModule: SingleComponentModule;

  beforeEach(() => {
    singleComponentModule = new SingleComponentModule();
  });

  it('should create an instance', () => {
    expect(singleComponentModule).toBeTruthy();
  });
});
