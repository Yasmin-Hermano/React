

const Perguntas = ( props ) => {


    require('./Perguntas.css');

    const perguntas = [
        {
            imagem: "https://i.pinimg.com/originals/28/66/7d/28667da1038d1605f2a7a32b82f6b16b.jpg",
            texto:"1 - No mito português quantas vidas tem um gato?",
            alternativaA:"-5 vidas",
            alternativaB:"-7 vidas",
            alternativaC:"-9 vidas",
            alternativaD:"-2 vidas",
            correta:"",

        },
        {
            imagem: "https://drauziovarella.uol.com.br/wp-content/uploads/2012/01/trypanossoma-cruzi-e1555101468731-1000x562.jpg",
            texto:"2 - Qual bicho transmite a doença chagas?",
            alternativaA:"Barata",
            alternativaB:"Abelha",
            alternativaC:"Pulga",
            alternativaD:"Barbeiro",
            correta:"",

        },
        {
            imagem: "https://blog.cobasi.com.br/wp-content/uploads/2021/04/coletivo-de-caes-principal.jpg",
            texto:"3 - Qual é o coletivo de cães?",
            alternativaA:"Matilha",
            alternativaB:"Rebanho",
            alternativaC:"Alcateia",
            alternativaD:"Manada",
            correta:"",

        },
        {
            imagem: "https://th.bing.com/th/id/R.b48db10b04a739fb8c31ee468819610c?rik=p8hdvCtzB6Khtw&riu=http%3a%2f%2fbmf-usa.org%2fwp-content%2fuploads%2f2016%2f02%2fCarmen-Miranda-840x1024.jpg&ehk=WusR16x1VVWl41TeNfM37jsYojX65an6CLL10Qf5KdI%3d&risl=&pid=ImgRaw&r=0",
            texto:"4 - Em que país nasceu Carmem Miranda?",
            alternativaA:"Itália",
            alternativaB:"Espanha",
            alternativaC:"Portugal",
            alternativaD:"Brasil",
            correta:"",

        },
        {
            imagem: "https://aventurasnahistoria.uol.com.br/media/_versions/baralhomdmdm_widelg.png",
            texto:"5 - Seguindo a sequência do baralho, qual carta vem depois do dez?",
            alternativaA:"Valete",
            alternativaB:"Rei",
            alternativaC:"Rainha",
            alternativaD:"Bobo do Corte",
            correta:"",

        },
        {
            imagem: "https://ehacks.com.br/wp-content/uploads/167/11-meme-duvida-e1518555087859.png",
            texto:"6 - Em que parte do corpo se encontra a epiglote?",
            alternativaA:"-Estomago",
            alternativaB:"-Cabeça",
            alternativaC:"-Mãos",
            alternativaD:"-Boca",
            correta:"",

        },
        {
            imagem: "https://www.diariodoaco.com.br/images/noticias/58898/mn_uFh28panela-com-agua-fervendo-cozinhar-cozinhando-1346778797784_615x300.jpg",
            texto:"7 - A quantos graus Celsius a água precisa estar para começar a ferver?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },
        {
            imagem: "https://i0.statig.com.br/bancodeimagens/2q/zv/72/2qzv725d6ezxxhjvzwmk9bdzz.jpg",
            texto:"8 - Quantos noves tem de 0 a 100?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },
        {
            imagem: "https://www.state.gov/wp-content/uploads/2018/11/Russia-2499x1406.jpg",
            texto:"9 - Qual é a capital da Rússia?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },{
            imagem: "https://th.bing.com/th/id/OIP.muYjFkJ6-_1kz_HMnksHoQHaEZ?pid=ImgDet&rs=1",
            texto:"10 - Em que estado brasileiro aconteceu a guerra de canudos?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },{
            imagem: "https://th.bing.com/th/id/R.382149bddc33c660835fed930badf6bc?rik=bqE%2fWIV8K9jshA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jfMzHkGxB50%2fTs1VW6GOUvI%2fAAAAAAAAHMc%2f1T0UqU9PkUA%2fs1600%2ff_73356.jpg&ehk=IadPGLOYouF%2f1ZIsj%2bqoz6HpceFINznRsxleu5fat%2fM%3d&risl=&pid=ImgRaw&r=0",
            texto:"11 - A cerveja Duff aparece em qual desenho?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },{
            imagem: "https://th.bing.com/th/id/OIP.SzMSqbwgJgHTTBr5gYdwMwAAAA?pid=ImgDet&w=300&h=248&rs=1",
            texto:"12 - Quantos pulmões um humano tem?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },{
            imagem: "https://www.meiahora.com.br/_midias/jpg/2019/02/09/trofeu_mundial-9622741.jpg",
            texto:"13 - Qual dos clubes de futebol descritos a baixo, não possui o título Mundial de clubes?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },{
            imagem: "https://static1.abc.es/media/tecnologia/2018/07/22/meme-kEsD--620x349@abc.jpg",
            texto:"14 - A condensação é a transição entre quais estados da matéria?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },{
            imagem: "https://1.bp.blogspot.com/-WWvso_NZgXE/XlFww5amy_I/AAAAAAAAEeo/r6xMS22Z588GKzhAKEBQN7nPdnr2h_prACLcBGAsYHQ/s640/frases-sobre-empoderamento-feminino%2B%25283%2529.jpg",
            texto:"15 - O dia internacional das mulheres é comemorado em qual mês?",
            alternativaA:"Sample",
            alternativaB:"Sample",
            alternativaC:"Sample",
            alternativaD:"Sample",
            correta:"",

        },
    ];



    return  (

        <div className="ContainerPerguntas">

            <div className="BlocoImagemTexto">
                
                <br/>
                <a>{perguntas[5].texto}</a>
                <br/>
                <img src={perguntas[4].imagem}/>
            </div>
            <div className="BlocoRespostasBotoes">
                
                <ul>
                    <li>{perguntas[5].alternativaA}</li>
                    <li>{perguntas[5].alternativaB}</li>
                    <li>{perguntas[5].alternativaC}</li>
                    <li>{perguntas[5].alternativaD}</li>
                </ul>


            </div>

        </div>

    );
}

export default Perguntas;