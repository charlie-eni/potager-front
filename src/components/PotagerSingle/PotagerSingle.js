import {v4 as uuid} from 'uuid';

function PotagerMini({ data }) {

  //   idCarre: 6
  // plans: [{…}]
  // potager: 3
  // surface: 1000
  // typeExposition: "MI_OMBRE"
  // typeSol: "CALCAIRE"

  //   carre: 6
  // dateMiseEnPlace: "2021-06-09"
  // dateRecolte: "2021-06-09"
  // id: 7
  // plante: {idPlante: 5, plans: Array(1), nom: "Tomate", type: "fruit", variete: "cerise", …}
  // quantite: 12

  
  return (
    <>
      {console.log(data.carre)}
      <div className="potagerHeader">Potager: {data.idPotager}</div>
      {data.carre.length < 1 && <div>Pas de carré</div>}
      {data.carre?.map(carre => (
        <div key={uuid()} className="carre">
          <h2>Carré n° {carre.idCarre}</h2>
          <div>Surface: {carre.surface}</div>
          <div>Exposition: {carre.exposition}</div>
          <div>Sol: {carre.typeSol}</div>
          <br />
          {carre.plans.map((plan, i) => (
            <div key={uuid()}>
              <div>Plan: {i + 1}</div>
              <div>{plan.plante.nom}</div>
            </div>
          ))}
        </div>
      ))}
    </>

  );
}

export default PotagerMini;
