import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState<string>()

  const handleAdd = () => {
    setUpdateName(name)

  }

  return <>
    <div className="App"><h1>Hello World</h1></div>
    <div>
      <input value={name} name='name' type="text" onChange={(e) => { setName(e.target.value) }} />
      <button onClick={handleAdd}>Add</button>
    </div>
    <div>
      <ul>
        {updateName && (<li>{updateName}</li>)}
      </ul>
    </div>
  </>
}

export default App;
