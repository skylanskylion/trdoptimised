import { EventHomeModule } from './event-home.module';

describe('EventHomeModule', () => {
  let eventHomeModule: EventHomeModule;

  beforeEach(() => {
    eventHomeModule = new EventHomeModule();
  });

  it('should create an instance', () => {
    expect(eventHomeModule).toBeTruthy();
  });
});
