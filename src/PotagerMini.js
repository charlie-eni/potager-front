function PotagerMini({ data }) {

  return (
    <>
      <div className="potagerHeader">Potager: {data.idPotager}</div>
      <div>Localisation: {data.localisation}</div>
      <div>Nom: {data.nom}</div>
      <div>Surface: {data.surface}</div>
      <div>Ville: {data.ville}</div>
    </>
  );
}

export default PotagerMini;
