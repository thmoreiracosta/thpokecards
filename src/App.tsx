import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Seta from './components/Seta/Seta'
import pikachu from './assets/pikachu.png'
import charizard from './assets/charizard.png'
import mewtwo from './assets/mewtwo.png'

export default function App () {
  return (
    <>
      <Header />
      <Seta />
      <Card
        name='Pikachu'
        hp={300}
        image={pikachu}
        description='Pikachu é um tipo de Pokémon elétrico: os bolsos em suas bochechas, identificado por discos vermelhos que decoram, são capazes de gerar choques elétricos de intensidade variável, chegando até o nível de poder de um raio. Eles também o usam para se defender.'
      />
      <Card
        name='Charizard'
        hp={800}
        image={charizard}
        description='Charizard é um Pokémon do tipo Fogo e Voador introduzido na Geração I. Charizard é conhecido por ter uma rola enorme e por estrupar as suas treinadoras femeas, quando charizard entra em campo ele começa a se masturbar ate que seu HP desça a zero e ele morra, charizard tambem faz parte do partido nazistacomunista criado por george pig. É a evolução de Charmeleon.'
      />
      <Card
        name='Mewtwo'
        hp={1200}
        image={mewtwo}
        description='Mewtwo o pokémon genético, o pokémon que foi clonado geneticamente do Mew, o poder sientifico dos humanos não conseguiu dar a ele um coração compassivo, geralmente permanece imóvel para conservar suas energias, de forma que possa liberar seu poder total em batalha.'
      />
    </>
  )
}
