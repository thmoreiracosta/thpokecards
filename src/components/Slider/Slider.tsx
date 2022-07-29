import Card from '../Card/Card'
import seta from '../../assets/seta.png'
import pikachu from '../../assets/pikachu.png'
import charizard from '../../assets/charizard.png'
import mewtwo from '../../assets/mewtwo.png'
import './style.css'



export default function Slider () {
  return (
    <div className='slider-container'>
      <div>
        <button className='slider-container-btn-1'>
          <img src={seta} alt='seta-voltar' />
        </button>
      </div>
      <Card
        name='Pikachu'
        hp={300}
        imagePokemon={pikachu}        
        description='Pikachu é um tipo de Pokémon elétrico: os bolsos em suas bochechas, identificado por discos vermelhos que decoram, são capazes de gerar choques elétricos de intensidade variável, chegando até o nível de poder de um raio. Eles também o usam para se defender.'
      />
      <div>
        <button className='slider-container-btn-2'>
          <img src={seta} alt='seta-voltar' />
        </button>
      </div>
    </div>
  )
}
