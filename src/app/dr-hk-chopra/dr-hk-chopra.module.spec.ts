import { DrHkChopraModule } from './dr-hk-chopra.module';

describe('DrHkChopraModule', () => {
  let drHkChopraModule: DrHkChopraModule;

  beforeEach(() => {
    drHkChopraModule = new DrHkChopraModule();
  });

  it('should create an instance', () => {
    expect(drHkChopraModule).toBeTruthy();
  });
});
