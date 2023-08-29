import './Header.css'
function Header(){
    return(
        <header>
          <img src='/src/componentes/header/barbie.png' className='barbie-img'></img>
            <nav>
                <ul>
                <li>
              <a href="#" className='botao'>Inicio</a>
            </li>
            <li>
              <a href="#" className='botao'>Noticia</a>
            </li>
            <li>
              <a href="#" className='botao'>Sobre</a>
            </li>
            <li>
              <a href="#" className='botao'>Contato</a>
            </li>
                </ul>
            </nav>
        </header>


       


    )
}
export default Header


