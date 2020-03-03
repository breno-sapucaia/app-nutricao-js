var titulo = document.querySelector('#brand')
var nomeNutricionista = titulo.querySelector('span')
nomeNutricionista.textContent = 'Bruna Marquezine'
var tabela = document.querySelector('table tbody')

var campos = [
    document.querySelector('#nome'),
    document.querySelector('#data'),
    document.querySelector('#peso'),
    document.querySelector('#altura')
]

document.querySelector('form').addEventListener('submit', function (evento) {
    evento.preventDefault()

    var tr = document.createElement('tr')
    campos.forEach((campo) => {
        var td = createElement('td',campo.value)
        
        tr.appendChild(td)
    })
    var td = createElement('td',`${(campos[2].value / campos[3].value ** 2).toFixed(2)}`)
    tr.appendChild(td)
    tabela.appendChild(tr)
    this.reset()
    campos[0].focus()

})

const createElement = (element, text) => {
    let HTML = document.createElement(element)
    HTML.textContent = text
    return HTML
}
