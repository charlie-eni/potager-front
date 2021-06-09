import logo from './logo.svg';
import { useState } from 'react';
import axios from 'axios';
import PotagerMini from './PotagerMini';
import PotagerSingle from './PotagerSingle';
import Form from './Form';
import './App.css';
import {v4 as uuid} from 'uuid';
function App() {


  const [listPotager, setListPotager] = useState(null);
  const [singleData, setSingleData] = useState(null);

  async function getPotager() {
    try {
      const res = await axios.get('https://potager-app.herokuapp.com/api/potager');
      setListPotager([...res.data]);

    } catch (error) {
      console.error(error);
    }
  }

  async function addPotager(data) {
    data = JSON.stringify(data)
    try {
      const res = await axios({
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        url: 'https://potager-app.herokuapp.com/api/potager',
        data
      });

      getPotager()
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="App">
      <h1>POTAGE.COM</h1>
      < input type="button" value="Voir mes potagers" onClick={getPotager} />
      <p>Ajouter un potager</p>
      < Form handleSubmit={addPotager} />
      {singleData &&
        <div className="potagerSingle">
          <div className="fermer" onClick={() => setSingleData(null)}>Retour</div>
          <PotagerSingle data={singleData} />
        </div>
      }
      <div className="potagerContainer">
        {listPotager && listPotager.map(e => (
          <div key={uuid()} onClick={() => setSingleData({ ...e })} className="potager">
            <PotagerMini key={e.idPotager} data={e} />
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default App;
