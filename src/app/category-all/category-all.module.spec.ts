import { CategoryAllModule } from './category-all.module';

describe('CategoryAllModule', () => {
  let categoryAllModule: CategoryAllModule;

  beforeEach(() => {
    categoryAllModule = new CategoryAllModule();
  });

  it('should create an instance', () => {
    expect(categoryAllModule).toBeTruthy();
  });
});
