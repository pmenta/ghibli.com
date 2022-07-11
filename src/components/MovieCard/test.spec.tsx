import { render, screen, waitFor } from '@testing-library/react'
import { MovieCard } from '.'
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
}

describe('<MovieCard />', () => {
  test('should render movie info', () => {
    render(
      <ThemeProvider theme={theme}>
        <MovieCard movie={movie} />
      </ThemeProvider>
    )

    expect(screen.getByText(movie.title)).toBeInTheDocument()
    expect(screen.getByText(movie.description)).toBeInTheDocument()
    expect(screen.getByText(`Dir by: ${movie.director}`)).toBeInTheDocument()
    expect(screen.getByText(movie.original_title)).toBeInTheDocument()
  })

  test('should favorite and disfavor a movie', async () => {
    render(
      <FavoritesProvider>
        <ThemeProvider theme={theme}>
          <MovieCard movie={movie} />
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
