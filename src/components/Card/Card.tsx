import './style.css'

interface CardProps {
  name: string
  hp: number
  imagePokemon: string  
  description: string
}

export default function Card (props: CardProps) {
  return (
    <>    
      <ul className="list-pokemons">
        <li className="card-item selected background-1">
          <div className="card-info">
            <h2>{props.name}</h2>
            <p>HP {props.hp}</p>
          </div>
          <div className="card-image">
            <img src={props.imagePokemon} alt={props.name} />
          </div>
          <div className="card-description">
            <h3>Descrição</h3>
            <p>{props.description}</p>
          </div>
        </li>
      </ul>
    </>
  )
}
