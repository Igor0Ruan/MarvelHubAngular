import { Pipe, PipeTransform } from '@angular/core';
import { ImageModel } from '../models/image.model';

@Pipe({
  name: 'defaultImageSource',
  standalone: false
})
export class DefaultImageSourcePipe implements PipeTransform {

  transform(imageObj: ImageModel): string {
    return `${imageObj.path}.${imageObj.extension}`;
  }
}
