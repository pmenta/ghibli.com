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
  producer: string
  release_date: string
  running_time: string
  rt_score: string
}

interface MovieInfoProps {
  movie: IMovie
}

export function MovieInfo({ movie }: MovieInfoProps) {
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
          <h1>{movie.title}</h1>
          <button
            type="button"
            onClick={() => handleFavorite(movie.id)}
            data-testid="favoriteButton"
          >
            <Image
              src={isFavorite() ? '/heart.svg' : '/outline_heart.svg'}
              width={25}
              height={25}
              alt="Heart"
            />
          </button>
        </div>
        <div className="subTitleContainer">
          <h2 className="originalTitle">{movie.original_title}</h2>
          <h2 className="releaseDate">{movie.release_date}</h2>
          <h2>{movie.running_time}m</h2>
          <h2>{movie.rt_score}% Rotten Tomatoes</h2>
        </div>
        <div className="prodInfoContainer">
          <div>
            <h3>{movie.director}</h3>
            <span>Director</span>
          </div>
          <div>
            <h3>{movie.producer}</h3>
            <span>Producer</span>
          </div>
        </div>
        <p>{movie.description}</p>
      </section>
    </MovieCardContainer>
  )
}
