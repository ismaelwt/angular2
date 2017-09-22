export class ValidationsMessage  {

    constructor(mensagem:string, error:boolean) {
        this.mensagem = mensagem;
        this.error = error;
    }

    error:boolean;
    mensagem:string;
    
}