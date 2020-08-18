import React, { useState, useEffect, Fragment } from 'react';
import GlobalStyle from '../../styles/global';
import api from '../../services/api' ;
import {Container, LoginForm} from './styles';
import {Button} from './styles';
import {Link} from 'react-router-dom';

function RegisterUser(){

  return(
    <div className="RegisterUser">
        <>
          <GlobalStyle/>
          <Container>
          <Fragment>
          <h1>Cadastre-se</h1>
          <LoginForm>
            <form>

            <label
            htmlFor="Cadastro-nome">
              Seu e-mail
              </label><br/>
            <input
            type='email'
            name='email'
            placeholder="nome"
            /><br/>

            <label
            htmlFor="Cadastro-senha">
              Sua senha</label><br/>

            <input
            type='password'
            name='pass'
            placeholder="senha"
            /><br/>
            <input
            type='submit'
            value='Cadastrar'
            ></input>
            </form >
          </LoginForm>
          </Fragment>
          </Container>
        </>
    </div>
  )
}

export default RegisterUser;
