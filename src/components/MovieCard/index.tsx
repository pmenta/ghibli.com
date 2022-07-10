import Image from 'next/future/image'

import { useFavoritesContext } from 'src/context/favoritesContext'

import { MovieCardContainer } from './styles'

interface IMovie {
  id: string
  title: string
  image: string
  original_title: string
  director: string
  description: string
}

interface MovieCardProps {
  movie: IMovie
}

export function MovieCard({ movie }: MovieCardProps) {
  const { favorites, handleFavorite } = useFavoritesContext()

  function isFavorite() {
    return favorites.includes(movie.id)
  }

  return (
    <MovieCardContainer>
      <Image
        src={movie.image}
        width={192}
        height={200}
        alt="Banner"
        className="banner"
      />
      <section>
        <div className="titleContainer">
          <a href={`/movies/${movie.id}`}>
            <h1>{movie.title}</h1>
          </a>
          <button type="button" onClick={() => handleFavorite(movie.id)}>
            <Image
              src={isFavorite() ? '/heart.svg' : '/outline_heart.svg'}
              width={25}
              height={25}
              alt="Coração"
            />
          </button>
        </div>
        <div className="subTitleContainer">
          <h2>{movie.original_title}</h2>
          <h2>Dir by: {movie.director}</h2>
        </div>
        <p>{movie.description}</p>
      </section>
    </MovieCardContainer>
  )
}
