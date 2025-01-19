function formatarCEP(input) {
  let value = input.value.replace(/\D/g, ''); 
  value = value.slice(0, 8); 

  if (value.length > 5) {
    value = value.slice(0, 5) + '-' + value.slice(5);
  }
  else if (value.length <= 5 && input.value.includes('-')) {
    input.value = value.replace('-','');
}
input.value = value;
}

function buscarCEP(input) {
  const cepInvalidoError = document.getElementById('cep-invalido-error');
  const cepNaoEncontradoError = document.getElementById('cep-nao-encontrado-error');
  const cepErroRequisicao = document.getElementById('cep-erro-requisicao');
  const errorMessageElement = document.getElementById(`${input.id}-error`);
  let cep = input.value.replace(/\D/g, '');

  cepInvalidoError.style.display = 'none';
  cepNaoEncontradoError.style.display = 'none';
  cepErroRequisicao.style.display = 'none';

  if (cep.length !== 8) {
      cepInvalidoError.style.display = 'block';
      limparCampos();
      input.focus();
      return;
  }

fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
          if (data.erro) {
            cepNaoEncontradoError.style.display = 'block';
            limparCampos();
            input.focus();
            return;
          }

          document.getElementById('estado').value = data.uf || ""
          document.getElementById('cidade').value = data.localidade || "";
          errorMessageElement.textContent = '';
        })

      .catch(error => {
        if (input.dataset.erroRequisicaoExibido !== "true") {
          cepErroRequisicao.style.display = 'block';
          limparCampos();
          input.focus();
          input.dataset.erroRequisicaoExibido = "true";
        }
      });
}

function limparCampos() {
document.getElementById('cidade').value = "";
document.getElementById('estado').value = "";
}


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

const botoes = document.querySelectorAll('.nav-button');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('.nav-button-ativo'));
    botao.classList.add('.nav-button-ativo');
  });
});

const dropdownMenu = document.querySelector('.dropdown-menu-all');
const botaoLogin = document.getElementById('button-user-icon');
const icon = document.getElementById('login-user-icon-id');

botaoLogin.addEventListener('click', () => {
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
    icon.style.color = 'black';
  } 
  else {
    dropdownMenu.style.display = 'none';
    icon.style.color = 'white';
  }
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('.all-container-menu-user')) {
      const dropdownMenu = document.getElementById('dropdown-menu-all-id');
      const icone = document.getElementById('login-user-icon-id');
      if (dropdownMenu.style.display = 'block') {
          dropdownMenu.style.display = 'none';
          icone.style.color = 'black';
          icone.style.color = 'white';
      }
  }
});

const abasBotoes = document.querySelectorAll('.aba-botao');
        const conteudos = document.querySelectorAll('.conteudo');

        abasBotoes.forEach(botao => {
            botao.addEventListener('click', () => {
                abasBotoes.forEach(b => b.classList.remove('ativo'));
                conteudos.forEach(c => c.classList.remove('ativo'));

                botao.classList.add('ativo');
                const conteudoId = botao.dataset.aba;
                document.getElementById(conteudoId).classList.add('ativo');
            });
        });