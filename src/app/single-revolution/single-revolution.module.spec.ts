import { SingleRevolutionModule } from './single-revolution.module';

describe('SingleRevolutionModule', () => {
  let singleRevolutionModule: SingleRevolutionModule;

  beforeEach(() => {
    singleRevolutionModule = new SingleRevolutionModule();
  });

  it('should create an instance', () => {
    expect(singleRevolutionModule).toBeTruthy();
  });
});
