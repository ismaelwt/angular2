
import { Cidade } from './cidade';
import { Usuario } from './usuario';

export class Empresa  {
    id: string;
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