import { MillisecondsToMinutesAndSecondsPipe } from './milliseconds-to-minutes-and-seconds.pipe';

describe('MillisecondsToMinutesAndSecondsPipe', () => {
  it('create an instance', () => {
    const pipe = new MillisecondsToMinutesAndSecondsPipe();
    expect(pipe).toBeTruthy();
  });
});
