
import { Cidade } from './cidade';
import { Usuario } from './usuario';

export class Empresa  {
    constructor() {
        this.nome = '';
        this.cnpj = '';
        this.cidade = new Cidade();
        this.endereco  = '';;
        this.cep = '';;
        this.bairro = '';
        this.numero = '';
        this.ddd = '';
        this.telefone = '';
        this.email = '';
        this.complemento = '';
    }

    id:string;
    nome:string;
    cnpj:string;
    cidade: Cidade;
    endereco:string;
    cep:string;
    bairro:string;
    numero:string;
    ddd:string;
    telefone:string;
    email:string;
    complemento:string;
    usuario: Usuario;
    
}