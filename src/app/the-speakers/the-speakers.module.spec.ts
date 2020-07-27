import {TheSpeakersModule} from './the-speakers.module';

describe('TheSpeakersModule', () => {
  let theSpeakersModule: TheSpeakersModule;

  beforeEach(() => {
    theSpeakersModule = new TheSpeakersModule();
  });

  it('should create an instance', () => {
    expect(theSpeakersModule).toBeTruthy();
  });
});
