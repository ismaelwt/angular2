import { Empresa } from './empresa';

export class GrupoDeModulo {
    constructor() {
        this.nome ='';
        this.Empresa = new Empresa();
    }

    id:string;
    nome:string;
    Empresa: Empresa;

}