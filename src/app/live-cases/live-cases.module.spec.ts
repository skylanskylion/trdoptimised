import { LiveCasesModule } from './live-cases.module';

describe('LiveCasesModule', () => {
  let liveCasesModule: LiveCasesModule;

  beforeEach(() => {
    liveCasesModule = new LiveCasesModule();
  });

  it('should create an instance', () => {
    expect(liveCasesModule).toBeTruthy();
  });
});
