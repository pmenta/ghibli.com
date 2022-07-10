import { useState } from 'react'
import Image from 'next/future/image'

import { Header } from '../components/Header'
import { MovieCard } from '../components/MovieCard'
import { getAllMovies } from 'src/requests/movies'

import { useFavoritesContext } from 'src/context/favoritesContext'

import type { GetStaticProps, NextPage } from 'next'
import { HomeContainer, FavoriteButton } from './styles'
import Head from 'next/head'

interface IMovie {
  id: string
  title: string
  image: string
  original_title: string
  director: string
  description: string
}

interface HomeProps {
  movies: IMovie[]
}

const Home: NextPage<HomeProps> = ({ movies }) => {
  const [isOnlyFavorites, setIsOnlyFavorites] = useState(false)
  const { favorites } = useFavoritesContext()

  function handleFavoriteMode() {
    setIsOnlyFavorites(!isOnlyFavorites)
  }

  return (
    <HomeContainer>
      <Head>
        <title>Ghibli.com</title>
      </Head>
      <Header />
      <FavoriteButton type="button" onClick={handleFavoriteMode}>
        <Image
          src={isOnlyFavorites ? '/outline_heart.svg' : '/heart.svg'}
          width={24}
          height={24}
        />
        <span>{isOnlyFavorites ? 'Exibir todos' : 'Exibir favoritos'}</span>
      </FavoriteButton>
      <main>
        <ul>
          {isOnlyFavorites ? (
            <>
              {movies
                .filter((movie) => favorites.includes(movie.id))
                .map((fav_movie) => (
                  <MovieCard movie={fav_movie} key={fav_movie.id} />
                ))}

              {movies.filter((movie) => favorites.includes(movie.id)).length ===
                0 && (
                <span className="emptyState">
                  Você ainda não tem nenhum favorito.
                  <br />
                  Experimente adicionar um!
                </span>
              )}
            </>
          ) : (
            <>
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </>
          )}
        </ul>
        {isOnlyFavorites ? (
          <>
            {favorites.length > 1 && (
              <Image
                src="/clouds.png"
                width={700}
                height={149}
                alt="Casa entre as nuvens"
                className="clouds"
              />
            )}
          </>
        ) : (
          <Image
            src="/clouds.png"
            width={700}
            height={149}
            alt="Casa entre as nuvens"
            className="clouds"
          />
        )}
      </main>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const movies = await getAllMovies()

  return {
    props: { movies },
    revalidate: 60 * 60 * 24, // 24 Horas
  }
}

export default Home
