import React, {useState} from 'react';
import Name from './Components/Name';
import List from './Components/List';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');

  function addName(){
    if(name!=='' && names.indexOf(name)===-1){
      const newNames = [name,...names];
      setNames(newNames);
      setName("");
    }
  }
  function removeName(name){
    const newNames = names.filter(n => n !==name);
    setNames(newNames);
  }
  function editName(name){
    const newNames = names.filter(n => n ===name);
    alert(newNames);
    document.f1.i1.value = newNames;
  }
  return (
    <div className="App">
      <form name="f1">
        <input id="i1" placeholder="Nombre" onChange={e => setName(e.target.value)}/>
        <button type="reset" onClick={() => addName() }>Añadir</button>
        {/*names.map(name => <Name value={name} removeName={removeName}/>)*/}
        <List 
          data={names}
          removeName={removeName}
          editName={editName}
          />
      </form>
    </div>
  );
}

export default App;