import logoPokemon from '../../assets/pokemon-go.png'
import pokebola from '../../assets/pokebola.png'
import './style.css'

export default function Header () {
  return (
    <>
      <header>
        <div className='container-logo'>
          <img className='pokemonGo' src={logoPokemon} alt='logo-pokemon-Go' />

          <div className='container-title'>
            <img className='pokebola' src={pokebola} alt='pokebola' />
            <h1>Th PokeCards Week</h1>
          </div>
        </div>
      </header>
    </>
  )
}
