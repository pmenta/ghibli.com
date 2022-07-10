import Head from 'next/head'

import { Header } from 'src/components/Header'
import { getMovieByID, getAllMovies } from 'src/requests/movies'

import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import { MovieContainer } from './styles'
import { MovieInfo } from 'src/components/MovieInfo'

interface IParams extends ParsedUrlQuery {
  id: string
}

interface ICharacter {
  id: string
  name: string
  gender: string
  age: string
}

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
  people: ICharacter[]
}

interface MovieProps {
  movie: IMovie
}

const Movie: NextPage<MovieProps> = ({ movie }) => {
  return (
    <MovieContainer>
      <Head>
        <title>Ghibli.com | {movie.title}</title>
      </Head>
      <Header />
      <MovieInfo movie={movie} />
      {movie.people.length > 0 && (
        <div className="charactersContainer">
          <h2>Characters</h2>
          <ul>
            {movie.people.map((character) => (
              <li key={character.id}>
                <h3>{character.name}</h3>
                <span>{'Age: ' + character.age}</span>
                <span>{'Gender: ' + character.gender}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </MovieContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await getAllMovies()

  return {
    paths: movies.map((movie: IMovie) => ({
      params: {
        id: movie.id,
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams
  const movie = await getMovieByID(id)

  return {
    props: { movie },
    revalidate: 60 * 60 * 24, // 24 Horas
  }
}

export default Movie
