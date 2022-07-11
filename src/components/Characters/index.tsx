import { CharactersContainer } from './styles'

interface ICharacter {
  id: string
  name: string
  gender: string
  age: string
}

interface CharactersProps {
  characters: ICharacter[]
}

export function Characters({ characters }: CharactersProps) {
  return (
    <>
      {characters.length > 0 && (
        <CharactersContainer>
          <h2>Characters</h2>
          <ul>
            {characters.map((character) => (
              <li key={character.id} data-testid={character.id}>
                <h3>{character.name}</h3>
                <span>{'Age: ' + character.age}</span>
                <span>{'Gender: ' + character.gender}</span>
              </li>
            ))}
          </ul>
        </CharactersContainer>
      )}
    </>
  )
}
