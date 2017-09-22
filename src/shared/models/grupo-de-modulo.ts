import { Empresa } from "../../shared/models/empresa";

export class GrupoDeModulo {
    constructor() {
        this.nome ='';
        this.Empresa = new Empresa();
    }

    id:string;
    nome:string;
    Empresa: Empresa;

}