import React, { useState } from 'react';
import axios from 'axios';

const getELO = () => {
  const [dados, setDados] = useState(null);

  const handleButtonClick = () => {
    axios.get('URL_DA_API')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Buscar Dados</button>
      {dados ? (
        <div>
          {dados}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default getELO;
