import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {

  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    if (!sortBy) return value

    switch (sortBy) {
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name))
      case 'canFly':
        // Si vuela = 1, si no vuela = -1 => Comparación int tradicional
        return value.sort((a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1) )
      case 'color':
        // Se asume el valor del indice del enum HeroColor y HeroCreator
        return value.sort((a, b) => a.color - b.color )
      case 'creator':
        return value.sort((a, b) => a.creator - b.creator )
      default:
        return value
    }
  }

}
