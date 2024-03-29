import { api } from 'src/services/api'

export async function getAllMovies() {
  try {
    const { data } = await api.get('/films')

    return data
  } catch (err) {
    throw err
  }
}

export async function getMovieByID(id: string) {
  try {
    const { data } = await api.get(`/films/${id}`)

    const havePeopleRoute =
      data.people[0] !== 'https://ghibliapi.herokuapp.com/people/'

    if (havePeopleRoute) {
      const people = await Promise.all(
        data.people.map(async (character: string) => {
          const { data } = await api.get(character)

          return data
        })
      )

      return { ...data, people }
    }

    return { ...data, people: [] }
  } catch (err) {
    throw err
  }
}
