import { HomeAdminModule } from './home-admin.module';

describe('HomeAdminModule', () => {
  let homeAdminModule: HomeAdminModule;

  beforeEach(() => {
    homeAdminModule = new HomeAdminModule();
  });

  it('should create an instance', () => {
    expect(homeAdminModule).toBeTruthy();
  });
});
