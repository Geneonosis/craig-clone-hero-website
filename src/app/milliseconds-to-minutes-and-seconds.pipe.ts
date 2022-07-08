import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsToMinutesAndSeconds',
})
export class MillisecondsToMinutesAndSecondsPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    let minutes: number = Math.floor(value / 60000);
    let seconds: number = parseInt(((value % 60000) / 1000).toFixed(0));
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
