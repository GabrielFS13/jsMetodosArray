let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivros()

async function getBuscarLivros(){
    const results = await fetch(endpointAPI)
    livros = await results.json()
    let livrosComDesconto = aplicarDesconto(livros)
    showLivros(livros)
}

