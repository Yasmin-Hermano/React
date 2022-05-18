import Apresentacao from "./Apresentacao";

const Final = ( props) => {

    const alteraTela = props.alteraTela;
    const pontos = props.pontos;

    require('./final.css')

    return ( 
        <div className="Final">
            <h1>Parabens!</h1>
            <p>Você terminou o Quiz</p>
            <p>Você marcou {pontos} pontos!</p>
            <button onClick={()=> alteraTela(<Apresentacao alteraTela={alteraTela}/>)}>Recomeçar</button>
        </div>
     );
}
 
export default Final;