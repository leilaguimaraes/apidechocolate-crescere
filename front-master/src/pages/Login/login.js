import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import api from '../../services/api' ;
import {Container, LoginForm} from './styles';
import {Button} from './styles';
import {Link} from 'react-router-dom';

function Login() {

  const token = localStorage.getItem('@chocolate-front/token');//posso ecolher qualquer nome mas ele tem que ser sempre o mesmo se não ele não vai conseguir comparar

  if (token) {
    window.location.href = '/'
  }

  const [infos, setInfos] = useState({
    email: '',
    password:'',
  })

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const {email, password: pass} = infos;

    const infosToApi = {
      email,
      pass,
    };

    const response = await api.post('/login', infosToApi);

    if (response.status !== 200) {
      console.log("Houve um erro")
      return alert('Houve um erro ao autenticar usuário')
    }
    localStorage.setItem('@chocolate-front/token', response.data.token);
    alert('Usuário autenticado com sucesso');

    window.location.href = '/';
  }

  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    })
  }



  return(
    <div className="Login">
        <>
          <GlobalStyle/>
          <Container>
          <h1>Bem-vindo de volta!</h1>
          <LoginForm onSubmit={onFormSubmit}>

            <input
            type='email'
            name='email'
            placeholder="nome"
            onChange= {handleInputChange}
            /><br/>

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

          <p>ou</p>
          <Button><Link to='/create'>Cadastre-se</Link></Button>
          </Container>
        </>
    </div>
  )
}

export default Login;
