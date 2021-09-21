import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas);

    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => { 
        // console.log('A função resolve foi executada depois de 3 segundos.')
        this.ofertas = ofertas;
        })
      .catch( (param: any) => {})
  }

}