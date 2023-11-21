

const key = "f705bcf20c2d1a769efb0eff711ff60b"


function colocarDadosnaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texte-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade de " + dados.main.humidity + "%"
    document.querySelector(".umidade").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosnaTela(dados)

}



function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidades").value

    buscarCidade(cidade)

}