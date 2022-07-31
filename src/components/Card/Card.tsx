import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import seta from '../../assets/seta.png'
import './style.css'

const GET_POKEDEX_QUERY = gql`
  query MyQuery {
    pokedexs {
      name
      hp
      description
      imagePokemon {
        id
        url
      }
    }
  }
`

export interface GetPokedexResponse {
  pokedexs: {
    id: string
    name: string
    hp: number
    description: string
    imagePokemon: {
      id: string
      url: string
    }
  }[]
}

export default function Card () {
  const { data } = useQuery<GetPokedexResponse>(GET_POKEDEX_QUERY)
  
  const array = data?.pokedexs;  
  let i = (array?.length);
  console.log(i)
  const [card, setCard] = useState(0) 
  

     
    
    return (
      <>
      <div className='slider-container'>
        <div>
          <button
            className='slider-container-btn-1'
            type='button'
            onClick={() => card > 0 ? setCard((card) => card - 1) : undefined}
            
            >
            <img src={seta} alt='seta-voltar' />
          </button>
        </div>
        <ul className='list-pokemons'>
          <li
            key={data?.pokedexs[card].name}
            className='card-item selected background-2'
            >
            <div className='card-info'>
              <h2>{data?.pokedexs[card].name}</h2>
              <p>HP {data?.pokedexs[card].hp}</p>
            </div>
            <div className='card-image'>
              <img
                src={data?.pokedexs[card].imagePokemon.url}
                alt={data?.pokedexs[card].name}
                />
            </div>
            <div className='card-description'>
              <h3>Descrição</h3>
              <p>{data?.pokedexs[card].description}</p>
            </div>
          </li>
        </ul>

        <div>
          <button
            className='slider-container-btn-2'
            type='button'
            onClick={() => card >= 0 ? setCard((card) => card + 1) : undefined}
            
            >
            <img src={seta} alt='seta-voltar' />
          </button>
        </div>
      </div>
    
    </>
  )
}
