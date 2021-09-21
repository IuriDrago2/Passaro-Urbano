import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{

  transform(texto: string, iniciarEm: number, truncarEm: number): string{
    if (texto.length > 15){
      return texto.substring(iniciarEm, truncarEm) + '...';
    }
    return texto;
  }

}
