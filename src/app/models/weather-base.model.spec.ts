import { WeatherBase } from './weather-base.model';

describe('WeatherBase', () => {
  it('should create an instance', () => {
    expect(new WeatherBase(new Date(), 20, "01n")).toBeTruthy();
  });
});
