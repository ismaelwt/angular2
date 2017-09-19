import { Empresa } from './empresa';

export class Usuario  {
    id: string;
    nome: string;
    email: string;
    password: string;
    Empresa: Empresa;
}