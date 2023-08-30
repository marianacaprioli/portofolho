import './Header.css'
function Header(){
    return(
        <header>
          <img src='./src/componentes/header/phanthasmah.jpg' className='fantasma-img'></img>
          <h2>𝑴𝒂𝒓𝒊𝒂𝒏𝒂 𝑩𝒐𝒄𝒐𝒏</h2>
          <nav className='navbar'>
          <ul>
            <li>
              <a href="#" className='botao'>Home</a>
            </li>
            <li>
              <a href="#" className='botao'>Projetos</a>
            </li>
            <li>
              <a href="#" className='botao'>Sobre</a>
            </li>

          </ul>
        </nav>
        </header>
    )
}
export default Header


