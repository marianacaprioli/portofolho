import "./Contato.css"
//import { Link } from 'react-router-dom'
function Contato() {
    return (
      <main className="contato">
            <div className="contatos-container">
                <h2>ENTRE EM CONTATO</h2>
                <p>Envie-nos uma mensagem:</p>
            <form className="contatos-form">
            <div className="form-group">
                <label htmlFor="nome">Nome:</label>
            </div>
            <div className="form-group">
                <input className="popo" type="text" id="nome" name="nome" placeholder="Seu nome" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
            </div>
            <div>
                <input className="popo" type="email" id="email" name="email" placeholder="Seu email" />
            </div>
            <div className="form-group">
                <label className="popo" htmlFor="mensagem">Mensagem:</label>
               
            </div>
            <div>
                <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem"></textarea>
            </div>
                <button className= "envio" type="submit">Enviar</button>
               
          </form>
            </div>
      </main>

    );
  }
  export default Contato