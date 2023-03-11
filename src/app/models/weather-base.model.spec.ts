import { WeatherBase } from './weather-base.model';

describe('WeatherBase', () => {
  it('should create an instance', () => {
    expect(new WeatherBase(20)).toBeTruthy();
  });
});
