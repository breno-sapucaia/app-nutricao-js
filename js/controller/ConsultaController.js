class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputNome = $('#nome')
        this._inputData = $('#data').value.split('-').map((item, indice) => item - (indice % 2))
        this._inputPeso = $('#peso')
        this._inputAltura = $('#altura')
    }

    adiciona = (evento) => {
        evento.preventDefault()
        let consulta = new Consulta(
            this._inputNome.value,
            new Date(...this._inputData),
            this._inputPeso.value,
            this._inputAltura.value
        )

        console.log(consulta)
    }
}