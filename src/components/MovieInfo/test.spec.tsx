import { render, screen, waitFor } from '@testing-library/react'
import { MovieInfo } from '.'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from 'styled-components'
import FavoritesProvider from 'src/context/favoritesContext'
import { theme } from 'src/styles/theme'

const movie = {
  id: '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
  title: 'Princess Mononoke',
  original_title: 'もののけ姫',
  image:
    'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg',
  description:
    'Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.',
  director: 'Hayao Miyazaki',
  producer: 'Toshio Suzuki',
  release_date: '1997',
  running_time: '134',
  rt_score: '92',
}

describe('<MovieInfo />', () => {
  test('should render movie info', () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieInfo movie={movie} />
      </ThemeProvider>
    )

    expect(screen.getByText(movie.title)).toBeInTheDocument()
    expect(screen.getByText(movie.description)).toBeInTheDocument()
    expect(screen.getByText(movie.director)).toBeInTheDocument()
    expect(screen.getByText(movie.original_title)).toBeInTheDocument()
    expect(screen.getByText(movie.director)).toBeInTheDocument()
    expect(screen.getByText(movie.producer)).toBeInTheDocument()
    expect(screen.getByText(movie.release_date)).toBeInTheDocument()
    expect(
      screen.getByText(movie.rt_score + '% Rotten Tomatoes')
    ).toBeInTheDocument()
    expect(screen.getByText(movie.running_time + 'm')).toBeInTheDocument()
  })

  test('should favorite and disfavor a movie', async () => {
    render(
      <FavoritesProvider>
        <ThemeProvider theme={theme}>
          <MovieInfo movie={movie} />
        </ThemeProvider>
      </FavoritesProvider>
    )

    const button = screen.getByTestId('favoriteButton')
    const heart = screen.getByAltText('Heart')
    expect(heart).toHaveAttribute('src', '/outline_heart.svg')

    userEvent.click(button)

    await waitFor(() => {
      expect(heart).toHaveAttribute('src', '/heart.svg')
    })

    userEvent.click(button)

    await waitFor(() => {
      expect(heart).toHaveAttribute('src', '/outline_heart.svg')
    })
  })
})
