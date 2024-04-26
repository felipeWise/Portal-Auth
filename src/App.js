//-16:00

import { useState } from 'react';
import './App.css';
import * as firebaseController from './components/firebaseController'
import FileUploadForm from './formComponents/sendArchive';
import IdForm from './formComponents/getArchive';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  async function onButtonSignInClicked(){
    console.log(email)
    setErrorMessage('')
    try{
      await firebaseController.signIn(email,password)
      setIsAuthenticated(true)
    } catch(error){
        console.error(error)
        setErrorMessage(error.message)
    }
  }

  async function onButtonSignUpClicked(){
    setErrorMessage('')
    try{
      await firebaseController.signUp(email,password)
      setEmail(email)
      setPassword(password)
      setIsAuthenticated(true)
    } catch(error){
        console.error(error)
        setErrorMessage(error.message)
    }
  }

  async function onButtonResetPasswordClicked(){
    setErrorMessage('')
    try{
      await firebaseController.resetPassword(email)
      setPassword()
    } catch(error){
        console.error(error)
        setErrorMessage(error.message)
  }
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated && (
          <div className='loginPage'>
          <div className='inputs'>
            <h1>Login</h1>
            <input onChange={event => setEmail(event.target.value)} placeholder='Insira seu email' type='email'></input>
            <br/>
            <input onChange={event => setPassword(event.target.value)}  placeholder='Insira sua senha' type='password'></input>
          </div>

          <div className='buttons'>
            <button onClick={onButtonSignInClicked}>Entrar</button>
            <br/>
            <button onClick={onButtonSignUpClicked}>Criar Usuário</button>
            <br/>
            <button onClick={onButtonResetPasswordClicked}>Mudar Senha</button>
          </div>
        </div>
        )}
        {isAuthenticated && (
          <div className='authPage'>
            <h3>Usuário Logado: <span>{email}</span></h3>

            <div>
              <h4>Selecione um formulário:</h4>
              <form className='form'> 
                <input
                  className='select'
                  type="radio"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                />
                Enviar Arquivo
              
                <input
                  className='select'
                  type="radio"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                />
                Consultar Arquivo
              </form>
            </div>
            <div>
              {selectedOption === 'option1' ? <FileUploadForm /> : <IdForm />}
            </div>
            
          </div>
        )}
        {errorMessage && (<span>{errorMessage}</span>)}
      </header>
    </div>
  );
}

export default App;
