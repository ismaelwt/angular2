import { Empresa } from './empresa';

export class Usuario  {
    
    constructor() {
        this.nome = '';
        this.email = '';
        this.password = '';
        this.Empresa = new Empresa();
    }
    
    id: string;
    nome: string;
    email: string;
    password: string;
    Empresa: Empresa;
}