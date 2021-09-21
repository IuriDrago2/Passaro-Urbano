import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  comoUsar: string;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // //acessar parametros(no caso ID) da rota pai(parent) e não da rota filho
    // this.route.parent.snapshot.params['id'];
    // console.log('ID da oferta na rota pai: ', this.route.parent.snapshot.params['id'])

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService.getComoUsarOfertaPorId(parametros.id)
        .then((resposta: any) => {
          this.comoUsar = resposta[0].descricao;
          console.log(resposta[0].descricao);
        });
    })
  }

}
