import React from 'react';
import img404 from '../../assets/images/404.png'
import './style';
import {Link} from 'react-router-dom'
import GlobalStyle from '../../styles/global'
import { Container } from './style';
import {Button} from './style'

function NotFound() {
  return (
    <div className="NotFound">
      <GlobalStyle/>
        <Container>
          <img src={img404} alt="404" ></img>
          <Button> <Link to="/login">Volte uma casa</Link></Button>
        </Container>

    </div>
  )
}
export default NotFound
