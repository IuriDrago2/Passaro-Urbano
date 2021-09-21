import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {OfertasService} from '../../ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  ondeFica: string;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //acessar parametros(no caso ID) da rota pai(parent) e não da rota filho
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
        .then((resposta: any) => {
          this.ondeFica = resposta[0].descricao;
          console.log(resposta[0].descricao);
        });
    })
  }

}
