import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'applicationTruncate', pure: false
})
export class ApplicationTruncatePipe implements PipeTransform {
  transform(value: string, args: string[]): string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 50;
    let trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}

@Pipe({
  name: 'round', pure: false
})
export class RoundPipe implements PipeTransform {
  transform(input: number) {
    return Math.floor(input);
  }
}

