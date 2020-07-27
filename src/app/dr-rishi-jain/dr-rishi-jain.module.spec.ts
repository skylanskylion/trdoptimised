import { DrRishiJainModule } from './dr-rishi-jain.module';

describe('DrRishiJainModule', () => {
  let drRishiJainModule: DrRishiJainModule;

  beforeEach(() => {
    drRishiJainModule = new DrRishiJainModule();
  });

  it('should create an instance', () => {
    expect(drRishiJainModule).toBeTruthy();
  });
});
