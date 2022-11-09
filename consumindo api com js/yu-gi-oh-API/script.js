const container = document.getElementById('demo')

async function buscarCartas() {
    try {
        const resposta = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        //console.log(resposta)
        const json = await resposta.json()
        const cartas = json.data
        const nossasCartas = cartas.slice(299, 304)
        nossasCartas.map((carta) => {
            return container.innerHTML += `
                <div class="card">
                    <img class="image" src=${carta.card_images[0].image_url}>
                    <h1 class='tittle>${carta.name}>
                    <p class='type'>${carta.type}>
                    <p class='description'>${carta.desc}>
                </div>`
        })
    }
    catch(err) {
        console.error("Capiturei um erro: ", erro)
    }
}

buscarCartas()