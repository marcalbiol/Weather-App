import { Weather } from './weather.model';

describe('Weather', () => {
  it('should create an instance', () => {
    expect(new Weather(new Date(), 20, "01n", 50, 10.5, 10000)).toBeTruthy();
  });
});
