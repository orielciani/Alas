import { Pipe, PipeTransform } from '@angular/core';
import { SERVER_URL } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = "usuarios"): any {
    let url = SERVER_URL + 'imagenes/';

    if ( !img ) {
      return 'imagenes/xxx'
    }
    if ( img.indexOf('https') >= 0 ) {
      return img;
    }
    switch ( tipo ) {
      case 'usuarios':
        url += 'usuarios/' + img;
         break;
      case 'profesionales':
        url += 'profesionales/' + img;
         break;
      case 'profesionales':
        url += 'usuarios/' + img;
        break;
      default:
        console.log('Imagen inexistente');
        url += 'usuarios/xxx';
    }
    return url;
  }

}
