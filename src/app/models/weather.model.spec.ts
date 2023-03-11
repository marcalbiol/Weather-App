import { Weather } from './weather.model';

describe('Weather', () => {
  it('should create an instance', () => {
    expect(new Weather(20, 50, 10.5, 10000)).toBeTruthy();
  });
});
