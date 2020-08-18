import React, { useState, useEffect, Fragment } from 'react';
import GlobalStyle from '../../styles/global';
import api from '../../services/api' ;
import {Container, LoginForm} from './styles';
import {Button} from './styles';
import {Link} from 'react-router-dom';

function Login(){

  const [dados, setDados] = useState({email:"", pass:""})
  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(dados);
    const {email, pass} = dados
  }

  const handleInputChange = (e)=> {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    })
  }

  return(
    <div className="Login">
        <>
          <GlobalStyle/>
          <Container>
          <Fragment>
          <h1>Bem-vindo de volta!</h1>
          <LoginForm onSubmit={onFormSubmit}>


            <label
            htmlFor="Cadastro-nome">
              Seu e-mail
              </label><br/>
            <input
            type='email'
            name='email'
            placeholder="nome"
            onChange= {handleInputChange}
            /><br/>

            <label
            htmlFor="Cadastro-senha">
              Sua senha</label><br/>

            <input
            type='password'
            name='pass'
            placeholder="senha"
            onChange= {handleInputChange}
            /><br/>
            <input
            type='submit'
            value='Entrar'
            ></input>

          </LoginForm>
          </Fragment>
          <p>ou</p>
          <Button><Link to='/registeruser'>Cadastre-se</Link></Button>
          </Container>
        </>
    </div>
  )
}

export default Login;
