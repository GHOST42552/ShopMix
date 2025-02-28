function mudariconechevronallcategory() {
    const icone = document.getElementById("Chevron-icon-all-category");
    if (icone.classList.contains("fa-chevron-down")) {
      icone.classList.remove("fa-chevron-down");
      icone.classList.add("fa-chevron-up");
    } else {
      icone.classList.remove("fa-chevron-up");
      icone.classList.add("fa-chevron-down");
    }
    const dropdownContent = document.getElementById('dropdown-all-category-content-id');
    dropdownContent.classList.toggle('show');
}

window.addEventListener('click', (event) => {
    if (!event.target.closest('.all-container-all-category')) {
        const dropdownContent = document.getElementById('dropdown-all-category-content-id');
        const icone = document.getElementById("Chevron-icon-all-category");
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            icone.classList.remove('fa-chevron-up');
            icone.classList.add('fa-chevron-down');
        }
    }
});

const containerAllCategory = document.getElementById('all-container-all-category-id');
const iconeChevron = document.getElementById("Chevron-icon-all-category");

containerAllCategory.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      iconeChevron.click();
    }
  });

  const iconeNotificacoes = document.getElementById("notificacao-icon-id");

  iconeNotificacoes.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      iconeNotificacoes.click();
    }
  });

  const iconeCEP = document.getElementById("CEP-icon-id");

  iconeCEP.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      iconeCEP.click();
    }
  });

  const iconeCarrinho = document.getElementById("shopping-cart-icon-id");

  iconeCarrinho.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      iconeCarrinho.click();
    }
  });

const botoes = document.querySelectorAll('.nav-button');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('nav-button-ativo'));
    botao.classList.add('nav-button-ativo');
  });
});

const dropdownMenu = document.querySelector('.dropdown-menu-all');
const botaoLogin = document.getElementById('button-user-icon');
const icon = document.getElementById('login-user-icon-id');
const containerMenu = document.querySelector('.all-container-menu-user');
const iconesContainer = document.getElementById('notificacao-cep-carrinho-icones-right-part-menu');

botaoLogin.addEventListener('click', () => {
    containerMenu.classList.toggle('moved');
    iconesContainer.classList.toggle('moved');
    dropdownMenu.classList.toggle('show');
    icon.style.color = 'black'
});

window.addEventListener('click', (event) => {
    if (!event.target.closest('.all-container-menu-user')) {
        dropdownMenu.classList.remove('show');
        containerMenu.classList.remove('moved');
        iconesContainer.classList.remove('moved');
        icon.style.color = ''
    }
});

        document.addEventListener('DOMContentLoaded', () => {
          const botoesCategorias = document.querySelectorAll('.nav-button');
          const conteudosCategorias = document.querySelectorAll('.conteudo-categoria');
          const botaoOfertas = document.querySelector('[data-categoria="ofertas"]');
          if (botaoOfertas) {
              botaoOfertas.classList.add('ativo');
              const categoriaOfertas = botaoOfertas.dataset.categoria;
              const conteudoOfertas = document.getElementById(`conteudo-${categoriaOfertas}`);
              if (conteudoOfertas) {
                  conteudoOfertas.style.display = 'block';
              }
          }
      
          botoesCategorias.forEach(botao => {
              botao.addEventListener('click', () => {
                  atualizarEstadoConfiguracoes(false);
                  const categoria = botao.dataset.categoria;
                  conteudosCategorias.forEach(conteudo => {
                      conteudo.style.display = 'none';
                  });
                  
                  botoesCategorias.forEach(b => b.classList.remove('ativo'))
                  botao.classList.add('ativo');
                  
                  const conteudoMostrar = document.getElementById(`conteudo-${categoria}`);
                  if (conteudoMostrar) {
                      conteudoMostrar.style.display = 'block';
                  }
              });
          });
});