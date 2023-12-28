// src/app/sort.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: any[], field: string, order: number): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    const arrayCopy = array.slice(); 

    arrayCopy.sort((a: any, b: any) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue < bValue) {
        return -1 * order;
      } else if (aValue > bValue) {
        return 1 * order;
      } else {
        return 0;
      }
    });

    return arrayCopy;
  }
}
