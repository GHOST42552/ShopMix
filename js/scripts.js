function Avaliacao({ nota }) {
    const estrelas = [];
    for (let i = 0; i < 5; i++) {
      if (i < nota) {
        estrelas.push(<i className="fas fa-star" key={i}></i>);
      } else {
        estrelas.push(<i className="far fa-star" key={i}></i>);
      }
    }
    return <div className="avaliacao">{estrelas}</div>;
}