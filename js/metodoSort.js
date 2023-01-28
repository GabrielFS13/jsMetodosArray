const buttonPreco = document.querySelector("#btnOrdenarPorPreco")

buttonPreco.addEventListener('click', ordenarPorPreco)


function ordenarPorPreco(){
    //crescente
    let livrosOrdenados = livros.sort((a, b) =>  a.preco - b.preco )
    //decrescente
    //let livrosOrdenados = livros.sort((a, b) =>  a.preco - b.preco )


    showLivros(livrosOrdenados)

}