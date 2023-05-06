import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendWord'
})
export class AppendWordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
