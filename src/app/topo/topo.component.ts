import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subject, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  ofertas: Observable<Oferta[]>;
  ofertas2: Oferta[];
  subjectPesquisa: Subject<string> = new Subject();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa //retorno Array de ofertas[]
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(
        switchMap((termo: string) => {
          console.log('Requisicao http para API ')

          if (termo.trim() === '') {
            //retornar um observable de array de ofertas VAZIO
            return of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termo);
        }))
        .pipe(catchError((err: any) => {
        console.log(err)
        return of<Oferta[]>([])
      }))
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas)
      this.ofertas2 = ofertas
    })
  }


  // pesquisa(event: Event){
  pesquisa(termoDaBusca: string) {
    this.subjectPesquisa.next(termoDaBusca);
    console.log('keyup caractere', termoDaBusca)
    /*
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);
    this.ofertas.subscribe((ofetas: Oferta[]) => console.log(ofetas),
    (erro: any) => console.log('Erro status: ', erro.status),
    () => console.log('Fluxo de eventos completo'))
    */
  }

  limpaPesquisa(): void{
    this.subjectPesquisa.next('');
  }

}
