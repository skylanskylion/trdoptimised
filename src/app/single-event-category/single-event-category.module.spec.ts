import { SingleEventCategoryModule } from './single-event-category.module';

describe('SingleEventCategoryModule', () => {
  let singleEventCategoryModule: SingleEventCategoryModule;

  beforeEach(() => {
    singleEventCategoryModule = new SingleEventCategoryModule();
  });

  it('should create an instance', () => {
    expect(singleEventCategoryModule).toBeTruthy();
  });
});
