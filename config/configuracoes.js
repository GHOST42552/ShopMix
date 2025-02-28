document.addEventListener('DOMContentLoaded', async function () {
    const abasBotoes = document.querySelectorAll('.aba-botao');

    abasBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const abaId = botao.dataset.aba;

            if (abaId) {
                const abaAtiva = document.querySelector('.aba-botao.ativo');
                if (abaAtiva) {
                    abaAtiva.classList.remove('ativo');
                }

                const conteudoAtivoAnterior = document.querySelector('.conteudo.ativo');
                if (conteudoAtivoAnterior) {
                    conteudoAtivoAnterior.classList.remove('ativo');
                }

                botao.classList.add('ativo');

                const conteudoAtivo = document.querySelector(`.conteudo#${abaId}`);

                if (conteudoAtivo) {
                    conteudoAtivo.classList.add('ativo');
                }
            }
        });
    });

    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginSuccessful(localStorage.getItem('displayName'));
    }
});

function buscarCEP(input) {
    const cepInvalidoError = document.getElementById('cep-invalido-error');
    const cepNaoEncontradoError = document.getElementById('cep-nao-encontrado-error');
    const cepErroRequisicao = document.getElementById('cep-erro-requisicao');
    const estadoInput = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade');

    let cep = input.value.replace(/\D/g, '');

    cepInvalidoError.style.display = 'none';
    cepNaoEncontradoError.style.display = 'none';
    cepErroRequisicao.style.display = 'none';

    if (cep.length !== 8) {
        cepInvalidoError.style.display = 'block';
        limparCampos(estadoInput, cidadeInput);
        input.focus();
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                cepNaoEncontradoError.style.display = 'block';
                limparCampos(estadoInput, cidadeInput);
                input.focus();
                return;
            }

            estadoInput.value = data.uf || "";
            cidadeInput.value = data.localidade || "";
        })
        .catch(error => {
            console.error("Erro na busca de CEP:", error);
            cepErroRequisicao.style.display = 'block';
            limparCampos(estadoInput, cidadeInput);
            input.focus();
        });
}

function limparCampos(estadoInput, cidadeInput) {
    estadoInput.value = "";
    cidadeInput.value = "";
}

function formatarCEP(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.slice(0, 8);

    if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5);
    }

    input.value = value;
}