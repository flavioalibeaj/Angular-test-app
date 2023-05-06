import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperLower'
})
export class UpperLowerPipe implements PipeTransform {

  transform(value: string, upperLower: string): unknown {
    if(upperLower === "uppercase"){
      return value.toUpperCase();
    } return value.toLowerCase();
  }

}
