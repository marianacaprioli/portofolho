import './Footer.css'
import testi  from "./phanthasmah.jpg"
export default function Footer() {
  return (
    <footer>
   <img src={testi} className='fantasma-img2'></img>

  <div className="footer-section">
    <h2>Links Importantes</h2>
    <ul>
      <li><a href="#">Suporte</a></li>
      <li><a href="#">Ajuda</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>
  
  <div className="footer-section">
    <h2>Contato</h2>
    <p>Email: mariana.caprioli@estudante.ifms.edu.br</p>
    <p>Telefone: (00)4002-8922</p>
  </div>
  
  <div className="footer-section">
    <h2>Redes Sociais</h2>
    <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  </div>
</footer>


  )
}