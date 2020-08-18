import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  max-width: 800px;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  border-radius: 4px;
  margin: 80px auto;

  h1{
    color: #CFC1B4
  }
  `;


  export const LoginForm = styled.form `
  label{
    font-size:10px;
    color: #BCAC9D
  }
  input{
    border: .5px solid #CFC1B4;
    border-radius: 5px;
    color: #BCAC9D;
    padding: 10px;
    width: 500px;
    margin-bottom:20px;
    transition:.5s;
  }
  input[type='submit']:hover{
    cursor: pointer;
    background: #E5E5E5;
  }
  `
  export const Button = styled.button `{
    padding: 10px;
    background-color: #9DBABC;
    border: 0px solid;
    border-radius: 5px;
    margin-top: 20px;
    &:hover{
      background: #92B4B7
    }
    a{
      color: white;
      text-decoration: none;
      padding:10px;
    }
  }`


