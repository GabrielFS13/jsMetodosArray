const btn = document.querySelectorAll(".btn")

btn.forEach(botao => botao.addEventListener('click', filtrarLivro))

function filtrarLivro(){
    const currentBtn = document.getElementById(this.id)
    const categoria = currentBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) :  livros.filter( livro => livro.categoria == categoria)

    showLivros(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calculaTotal(livrosFiltrados)
        exibeValor(valorTotal)
    }
}

function exibeValor(tot){
    totVal.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">R$ ${tot}</span></p>
    </div>
    `
}