import { Pipe, PipeTransform  } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform (input: any, separator: string = ' ', limit?: number): any {

    if (!_.isString(input)) {
      return input;
    }

    return input.split(separator, limit);
  }
}
