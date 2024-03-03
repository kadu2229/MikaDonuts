import '../styles/header.css';
import logo from '../images/mikaDonuts.jpeg'

function Header() {
  return(
    <div id='header'>
      <div className='headerItens'>
        <img id='logo' src={logo} alt="logo mikaDonuts"/>
        <div id='links'>
          <a className='headerLinks'>Sobre nós</a>
          <a className='headerLinks' href='https://wa.me/5521991355849?text=ol%C3%A1+gostaria+de+fazer+um+or%C3%A7amento' >Fale conosco</a>
        </div>
      </div>
    </div>
  );
}

export default Header;