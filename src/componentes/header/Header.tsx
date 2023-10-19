import './Header.css'
import {Link} from "react-router-dom"
import testo  from "./phanthasmah.jpg"
function Header(){
    return(
        <header>
          <img src={testo} className='fantasma-img'></img>
          <h2>𝑴𝒂𝒓𝒊𝒂𝒏𝒂 𝑩𝒐𝒄𝒐𝒏</h2>
          <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/projetos">Interesses</Link> 
            </li>
            <li>
              <Link to="/sobre">Sobre</Link> 
            </li>
            <li>
              <Link to="/contato">Contato</Link> 
            </li>

          </ul>
        </nav>
        </header>
    )
}
export default Header


