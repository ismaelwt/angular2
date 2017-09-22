import { Empresa } from './empresa';
import { GrupoDeModulo } from './grupo-de-modulo';

export class Modulo  {
    
    constructor() {
        this.nome = '';
        this.Empresa = new Empresa();
        this.GrupoDeModulo = new GrupoDeModulo();
    }
    
    id: string;
    nome:string;
    Empresa: Empresa;
    GrupoDeModulo: GrupoDeModulo;

}