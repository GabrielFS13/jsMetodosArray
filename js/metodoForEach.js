const section = document.querySelector("#livros")
const totVal = document.querySelector("#valor_total_livros_disponiveis")

function showLivros(livros){
  section.innerHTML = ''
    livros.forEach(livro =>{
      totVal.innerHTML = ''
      //let disponivel = verificaDisponibilidade(livro) True          False
      let disponivel = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        section.innerHTML += `
        <div class="livro">
        <img class="${disponivel}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}


/*
function verificaDisponibilidade(livro){
  if(livro.quantidade > 0){
    return 'livro_imagens'
  }else{
    return 'livro_imagens indisponivel'
  }
}
*/