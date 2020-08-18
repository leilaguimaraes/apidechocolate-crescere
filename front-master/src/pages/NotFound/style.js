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

  h1 {
    font-size: 50px;
    margin-top: 15px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  img {
    max-width: 500px;
  }
`;
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
