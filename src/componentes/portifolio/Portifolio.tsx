import {useState} from 'react'
import Projeto from './../projeto/Projeto'
import './Portifolio.css'

type ProjetoType = {
    id:number,
    titulo:string,
   descricao:string,
    imagem:string
}

export default function Main(){
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Genshin Impact',
            descricao: 'Entre nesse Vasto Mundo Mágico de Aventura. Uma história que nunca foi ouvida, uma lenda que foi esquecida, como um reino perdido afundado sob as ondas, ansiando por um bardo para cantar suas canções afogadas.',
            imagem :'/genshinimpact.jpg'
            
        },
        {
            id:2,
            titulo: 'One Piece',
            descricao: 'A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.',
            imagem:'/onepiece.webp'
    
        },
        {
            id:3,
            titulo: 'Black Clover',
            descricao: 'Um garoto destemido e sem poderes mágicos luta pelo título de Rei Mago – enfrentando quatro rivais que foram banidos e agora ameaçam destruir o Reino Clover.',
            imagem:'/blackclover.webp'    
        },
        {
            id:4,
            titulo: 'Mob Psycho 100',
            descricao: 'Kageyama Shigeo, o "Mob", é um garoto que não leva muito jeito pra se expressar, mas que é um poderoso telepata. Decidido a levar uma vida normal, Mob suprime seus poderes extrasensoriais, mas quando suas emoções atingem um pico de 100%, algo terrível lhe acontece!',
            imagem:'/mobpsycho100.jpg'   
        }
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
       setTexto(e.target.value)
    }
    return(
        <>
        <div className="campo_pesquisa">
            <p>Saiba mais sobre meus interesses</p>
            <input type="text" className='botao_pesquisa' placeholder='Pesquise um Tópico' onChange={TrataTexto} />
            {!texto && <p>Resultados Para:{texto} </p>}
        </div>
        
        <main className="content-main">
             {/* 
                    Use algo do vetor para tentar criar os projetos 
                */}
                {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }


            
        </main>
        </>
    )
}