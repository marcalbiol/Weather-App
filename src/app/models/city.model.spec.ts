import { City } from './city.model';

describe('City', () => {
  it('should create an instance', () => {
    expect(new City("43201 Reus, Spain", "41.1555564", "1.1076133")).toBeTruthy();
  });
});
