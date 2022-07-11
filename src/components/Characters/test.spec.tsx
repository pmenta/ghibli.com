import { render, screen } from '@testing-library/react'
import { Characters } from '.'

import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'

const characters = [
  {
    id: '267649ac-fb1b-11eb-9a03-0242ac130003',
    name: 'Haku',
    gender: 'Male',
    age: '12',
  },
  {
    id: 'fe93adf2-2f3a-4ec4-9f68-5422f1b87c01',
    name: 'Pazu',
    gender: 'Male',
    age: '13',
  },
  {
    id: '598f7048-74ff-41e0-92ef-87dc1ad980a9',
    name: 'Lusheeta Toel Ul Laputa',
    gender: 'Female',
    age: '13',
  },
]

describe('<Characters />', () => {
  test('should render characters', () => {
    render(
      <ThemeProvider theme={theme}>
        <Characters characters={characters} />
      </ThemeProvider>
    )

    characters.map((character) => {
      const li = screen.getByTestId(character.id)
      expect(li).toBeInTheDocument()

      expect(li).toHaveTextContent(character.name)
      expect(li).toHaveTextContent('Age: ' + character.age)
      expect(li).toHaveTextContent('Gender: ' + character.gender)
    })
  })
})
