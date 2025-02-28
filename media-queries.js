function verificarMediaQueries() {
    const mediaQueries = [
        {
            nome: 'Pequena Tela e Sem Hover (max-width: 768px) e Sem Hover',
            query: '(max-width: 768px) and (hover: none)'
        },
        {
            nome: 'Pequena Tela e Com Hover (max-width: 768px) e Com Hover',
            query: '(max-width: 768px) and (hover: hover)'
        },
        {
            nome: 'Tela Média (min-width: 600px) e (max-width: 1024px) e Orientação Paisagem',
            query: '(min-width: 600px) and (max-width: 1024px) and (orientation: landscape)'
        },
        {
            nome: 'Tela Grande Alta Resolução (min-width: 1024px) e Alta Resolução',
            query: '(min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
        },
        {
            nome: 'Impressão ou Tela Grande (print, screen and min-width: 1200px)',
            query: 'print, screen and (min-width: 1200px)'
        }
    ];

    mediaQueries.forEach(mediaQuery => {
        const resultado = window.matchMedia(mediaQuery.query);
        console.log(`${mediaQuery.nome}: ${resultado.matches ? 'Ativa' : 'Inativa'}`);
    });
}

verificarMediaQueries();
window.addEventListener('resize', verificarMediaQueries);