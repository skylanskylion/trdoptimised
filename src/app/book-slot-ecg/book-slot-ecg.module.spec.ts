import { BookSlotEcgModule } from './book-slot-ecg.module';

describe('BookSlotEcgModule', () => {
  let bookSlotEcgModule: BookSlotEcgModule;

  beforeEach(() => {
    bookSlotEcgModule = new BookSlotEcgModule();
  });

  it('should create an instance', () => {
    expect(bookSlotEcgModule).toBeTruthy();
  });
});
