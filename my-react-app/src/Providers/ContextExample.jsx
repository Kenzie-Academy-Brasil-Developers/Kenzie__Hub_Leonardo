import React, { createContext, useState } from 'react';

const MeuContexto = createContext({});

const MeuContextoProvedor = ({ children }) => {
  const [valor, setValor] = useState('Leonardo');
  const  MeuContexto = createContext()
    const atualizarValor = (novoValor) => {
    setValor(novoValor);
  };

  return (
    <MeuContexto.Provider value={{ valor, atualizarValor,}}>
      {children}
    </MeuContexto.Provider>
  );
};

export { MeuContexto, MeuContextoProvedor };
