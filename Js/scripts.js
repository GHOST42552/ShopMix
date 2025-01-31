async function carregarTraducoes(idioma) {
    try {
        const response = await fetch(`locales/${idioma}.json`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo ${idioma}.json: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar traduções", error);
        return {};
    }
}

async function atualizarTextos(idioma) {
    const traducoes = await carregarTraducoes(idioma);
    const elementosParaTraduzir = document.querySelectorAll('[data-i18n]');

    elementosParaTraduzir.forEach(elemento => {
        const chaveTraducao = elemento.dataset.i18n;
        elemento.textContent = traducoes[chaveTraducao] || elemento.textContent;
    });
}

async function init() {
    const abasBotoes = document.querySelectorAll('.aba-botao');
    const conteudos = document.querySelectorAll('.conteudo');
    const selectIdioma = document.getElementById('select-idioma');

    if (!selectIdioma) {
        console.error("Elemento select-idioma não encontrado!");
        return; 
    }
    
    let idiomaSalvo = localStorage.getItem('idioma') || navigator.language || 'pt-BR';
    idiomaSalvo = idiomaSalvo.slice(0, 5);
    await atualizarTextos(idiomaSalvo);

    selectIdioma.addEventListener('change', async () => {
        const idiomaSelecionado = selectIdioma.value;
        localStorage.setItem('idioma', idiomaSelecionado);
        await atualizarTextos(idiomaSelecionado);
    });

    abasBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            abasBotoes.forEach(b => b.classList.remove('ativo'));
            conteudos.forEach(c => c.classList.remove('ativo'));

            botao.classList.add('ativo');
            const conteudoId = botao.dataset.aba;
            const conteudoAtivo = document.getElementById(conteudoId);
            if (conteudoAtivo) {
                conteudoAtivo.classList.add('ativo');
            } else {
                console.error(`Conteúdo com ID "${conteudoId}" não encontrado.`);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
