

class Consulta {
    constructor(nome,data,peso,altura) {
        this._pessoa = new Pessoa(nome,altura,peso)
        this._date = new Date(data.getTime())
        Object.freeze(this);
    }
    get date() {
        return this._date
    }
    get pessoa() {
        return this._pessoa
    }
    calculaIMC(){
        return Math.floor(this.pessoa.peso/ (this.pessoa.altura() ** 2))
    }
}