// Exercício dos doguinhos com fetch()
const container = document.getElementById('demo')

async function pegarDoguinho() {
    try {
        const resposta = await fetch('https://dog.ceo/api/breed/corgi/images/random')
        //console.log(resposta)
        const dadosDoguinho = await resposta.json()
        //console.log(dadosDoguinho)
        const image = document.createElement('img')
        image.setAttribute('src', dadosDoguinho.message)
        container.appendChild(image)
    }
    catch(err) {
        console.error("Capiturei um erro: ", erro)
    }
}

pegarDoguinho()

/*
fetch(url, {
    method: 'GET, POST, PUT, DELETE',
    headers: {},
    body: {},
})
*/