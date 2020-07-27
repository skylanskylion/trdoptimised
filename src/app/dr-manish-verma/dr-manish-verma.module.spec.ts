import { DrManishVermaModule } from './dr-manish-verma.module';

describe('DrManishVermaModule', () => {
  let drManishVermaModule: DrManishVermaModule;

  beforeEach(() => {
    drManishVermaModule = new DrManishVermaModule();
  });

  it('should create an instance', () => {
    expect(drManishVermaModule).toBeTruthy();
  });
});
