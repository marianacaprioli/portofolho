import './Main.css'
import teste  from "./mariana.jpg"
import testa  from "./fam.png"

function Main(){
 return(
  <main>
    <h1>𝑺𝒐𝒃𝒓𝒆 𝒎𝒊𝒎</h1>
    <div className="portfolio">
        <div className="project">
        <img src={teste} className='mariana-img'></img>
            <p>Sou a Mariana Bocon Caprioli, uma aventureira de 17 anos que fez sua entrada triunfal no mundo em 19 de agosto de 2006, 
                na pitoresca cidade de Eldorado, Mato Grosso do Sul. Meu coração bate mais forte por jogos empolgantes, animes fascinantes 
                e filmes épicos, todos com aquela dose mágica de aventura, fantasia e até mesmo comédia. Minha paixão reside nas histórias que 
                nos fazem escapar da realidade cotidiana.

                Quando não estou explorando mundos fictícios, estou dominando o português e, com um sorriso de satisfação, manobrando com destreza
                a língua inglesa. Quem diria que uma jornada cheia de curiosidades e aprendizado se desenrolaria desde o dia em que gritei
                pela primeira vez até hoje?
            </p>
        </div>
    </div>

    <div className="fantasma"><img src={testa} className='fam-img'></img></div>
  </main>
 )
}
export default Main