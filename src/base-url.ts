export class BaseUrl {

    _prodMode:boolean = false;


    enableProductionMode(){
        return this._prodMode = true;
    }

    getUrl(){
        if(this._prodMode){
            return 'http://testedomain1.tk/';
        }else {
            return 'http://localhost:8000/';
        }
        
    }
}