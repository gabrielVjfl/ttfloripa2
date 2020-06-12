import React from 'react'

import Img from '../img/c3a25d65-a7f5-46f8-88d5-f67911d2f1b1_200x200.png'

import Facebook from '../img/facebook (2).png'

import Instagram from '../img/instagram (1).png'

import linkedin from '../img/LI-In-Bug.png'

export default props => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg " id="nav">
  <img src={Img}></img>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#" id="home">Home <span className="sr-only">(Página atual)</span></a>
      <a className="nav-item nav-link" href="#" id="planos">Planos</a>
      <a className="nav-item nav-link" href="#" id="nossocontato">Nosso Contato</a>
      <a className="nav-item nav-link " href="#" id="sobrenos">Sobre nós</a>
      <a className="nav-item nav-link " href="#" id="trabalhosfeitos">Trabalhos Feitos</a>
      <img id="facebook" src={Facebook} width="40px" height="40px"></img>
      <img id="instagram" src={Instagram} width="40px" height="40px"></img>
      <img id="linkedin" src={linkedin} width="45px" height="40px"></img>

    </div>
  </div>
</nav>
      </header>
    )
}