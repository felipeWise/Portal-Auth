import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

const FileUploadForm = ({ onSubmit }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(file);
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className='form-send'>
      <label>
        Anexar arquivo (PDF ou Word):
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
        />
      </label>
      <p>Formatos aceitos: PDF, Word (.doc, .docx)</p>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FileUploadForm;
