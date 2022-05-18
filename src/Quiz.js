import React, { useState } from 'react';
import Final from './Final';
import TelaCorreta from './TelaCorreta';


const Quiz = (props) => {

    const alteraTela = props.alteraTela;


    require('./Quiz.css');


    //Função abaixo vai computar os pontos
    const [pontos , alteraPontos] = useState(0);


    // Funçao abaixo corre pelas perguntas
    const verificaResposta = ( i ) => {

        console.log(i);

        const respostaCorreta = perguntas[etapa].correta;
        if (respostaCorreta == i ) {
            alteraPontos(pontos + 1);    
        }
        console.log(pontos);



        if ( etapa + 1 < perguntas.length ) {
            alteraEtapa( etapa + 1);
        } else {
            alteraTela(<Final alteraTela={alteraTela} pontos = {pontos}/>);
        }

    }
    


    const [etapa , alteraEtapa] = useState( 0 );

    const perguntas = [
        {
            imagem: "https://blog.cobasi.com.br/wp-content/uploads/2018/11/gato-felicidade-lingua.jpg",
            texto:"1 - No mito português quantas vidas tem um gato?",
            alternativas:["5 vidas","7 vidas","9 vidas","2 vidas"],
            correta: 0,
        },
        {
            imagem: "#",
            texto:"2 - Qual bicho transmite a doença chagas?",
            alternativas:["1","2","3","4"],
            correta: 0,
        },
        {
            imagem: "#",
            texto:"3 - Qual é o coletivo de cães?",
            alternativas:["1","2","3","4"],
            correta:0,
        },
    ];

    
    return  (

        <div className="ContainerPerguntas">


            <div className='BlocoImagemTexto'>
                <h2> {perguntas[etapa].texto} </h2>
                <img src={perguntas[etapa].imagem}/>
                
            </div>
            <div className='BlocoRespostasBotoes'>
                <ul>
                    {
                        perguntas[etapa].alternativas.map((a , i)=> {
                            return <li onClick={()=> verificaResposta(i) }>{a}</li>
                        })
                    }
                </ul>
            </div>


        </div>

    );
}

export default Quiz;