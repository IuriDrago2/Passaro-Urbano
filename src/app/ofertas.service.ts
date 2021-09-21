import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {retry} from 'rxjs/operators'

import { Oferta } from './shared/oferta.model';

const API_URL = 'http://localhost:3000'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {
        //
    }

    getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisicao http e retornar uma promise de oferta[]
        return this.http.get<Oferta[]>(API_URL + '/ofertas')
        .toPromise()
    }

    escondendo_Codigo_Comentado() {
        // getOfertas(): Oferta[] {
        //     // let ofertas = ['Oferta1', 'Oferta2', 'Oferta3'];
        //     return this.ofertas;
        // }

        // getOfertas2(): Promise<Oferta[]> {
        //     return new Promise((resolve, reject) => {
        //         //algum tipo de processamento que ao finalizar chamada a função resolve ou reject
        //         let deuCerto: boolean = true;

        //         if (deuCerto) {
        //             setTimeout( () => resolve(this.ofertas), 3000)
        //         }
        //         else{
        //             reject({
        //                 codigoErro: 404,
        //                 mensagemErro: 'Servidor não encontrado!'
        //             })
        //             // reject(console.error('deu merda!'));
        //         }
        //     })
        // }
    }

    getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        // return this.http.get(API_URL + `/ofertas?categoria=${categoria}`)
        return this.http.get<Oferta[]>(API_URL + `/ofertas?categoria=${categoria}`).toPromise();
        // return this.http.get<Oferta[]>(API_URL + `/ofertas?categoria=${categoria}`).toPromise()
        // .then( (resposta: any) => resposta)
    }

    getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get<Oferta>(API_URL + `/ofertas?id=${id}`).toPromise();
    }

    getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get<string>(API_URL + `/como-usar?id=${id}`).toPromise()
    }

    getOndeFicaOfertaPorId(id: number): Promise<string>{
        return this.http.get<string>(API_URL + `/onde-fica?id=${id}`).toPromise()
    }

    pesquisaOfertas(termo: string): Observable<Oferta[]>{
        // _like = funciona igual o Like do banco de dados
        return this.http.get<Oferta[]>(API_URL + `/ofertas?descricao_oferta_like=${termo}`)
        .pipe(
            retry(10)
        )
    }

}
