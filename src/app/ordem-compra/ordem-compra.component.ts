import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //Criando os atributos de controle da validação dos campos
  enderecoValido: boolean;
  numeroValido: boolean;
  complementoValido: boolean;
  formaPagamentoValido: boolean;

  //estados primitivos dos campos (pristine)
  enderecoEstadoPrimitivo: boolean = true;
  numeroEstadoPrimitivo: boolean = true;
  complementoEstadoPrimitivo: boolean = true;
  formaPagamentoEstadoPrimitivo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string) {
    this.endereco = endereco;
    console.log(this.endereco);

    this.enderecoEstadoPrimitivo = false;

    //se a string for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    }
    else {
      this.enderecoValido = false;
    }
  }

  atualizaNumero(numero: string) {
    this.numero = numero;
    console.log(this.numero);

    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0){
      this.numeroValido = true;
    }
    else{
      this.numeroValido = false;
    }
  }

  atualizaComplemento(complemento: string) {
    this.complemento = complemento;
    console.log(this.complemento);

    this.complementoEstadoPrimitivo = false;

    if (this.complemento.length > 3){
      this.complementoValido = true;
    }
    else {
      this.complementoValido = false;
    }
  }

  atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento);

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento == 'debito' || this.formaPagamento == 'dinheiro'){
      this.formaPagamentoValido = true;
    }
    else {
      this.formaPagamentoValido = false;
    }
  }

}
