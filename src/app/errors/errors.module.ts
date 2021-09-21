import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
    declarations: [
        NaoEncontradoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NaoEncontradoComponent
    ]
})
export class ErrorsModule{

}