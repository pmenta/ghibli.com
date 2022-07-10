// styled.d.ts
import 'styled-components'
import { ITheme } from '../styles/theme'

// Inferindo tipagem do tema

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
