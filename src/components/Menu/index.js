import React from 'react';
import Logo from '../../assets/img/aluraflix.png'
import './Menu.css'
import './components/ButtonLink'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
    <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Aluraflix logo"/>
        </a>
        <Button as="a" className="ButtonLink" href="/">
          Novo Video
        </Button>   
    </nav>
    );
}

export default Menu;