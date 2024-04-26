import React, { useState } from 'react';
import '../App.css';
import getELO from '../components/getELO';

const IdForm = ({ onSubmit }) => {
  const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(id);
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </label>
      <button 
        type="submit"
        onClick={getELO}
      >
        Consultar Arquivo
      </button>
    </form>
  );
};

export default IdForm;
