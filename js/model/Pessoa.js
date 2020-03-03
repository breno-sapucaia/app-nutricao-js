class Pessoa {
    constructor(nome,altura,peso){
        this._nome = nome;
        this._altura = altura;
        this._peso = peso;
    }   

    get nome(){
        return this._nome
    }
    get altura(){
        return this._altura
    }
    get peso(){
        return this._peso
    }
}