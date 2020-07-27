import { NotFoundComponentModule } from './not-found-component.module';

describe('NotFoundComponentModule', () => {
  let notFoundComponentModule: NotFoundComponentModule;

  beforeEach(() => {
    notFoundComponentModule = new NotFoundComponentModule();
  });

  it('should create an instance', () => {
    expect(notFoundComponentModule).toBeTruthy();
  });
});
