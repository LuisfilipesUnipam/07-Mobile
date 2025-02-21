import React from 'react';

const nome = "Luis Filipe";

const elemento = (
  <div>
    <h1>Olá, {nome}!</h1>
      <p>Bem-vindo ao último ano do seu curso!!!</p>
  </div>
);

function App(){
  return elemento;
}

export default App;