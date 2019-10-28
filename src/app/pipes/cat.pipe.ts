import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cat'
})
export class CatPipe implements PipeTransform {

  transform(nombre : number): number {
    return nombre * 20;
  }

}