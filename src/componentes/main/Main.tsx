import './Main.css'
function Main(){
 return(
  <main>
    <h1>Seu Nome</h1>
    <div className="portfolio">
        <div className="project">
            <h2>Projeto 1</h2>
            <p>Descrição do primeiro projeto.</p>
        </div>
        
        <div className="project">
            <h2>Projeto 2</h2>
            <p>Descrição do segundo projeto.</p>
        </div>
        
        <div className="project">
            <h2>Projeto 3</h2>
            <p>Descrição do terceiro projeto.</p>
        </div>
    </div>
  </main>
 )
}
export default Main