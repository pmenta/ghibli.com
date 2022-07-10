import Image from 'next/image'
import Link from 'next/link'
import { Header as StyledHeader } from './styles'

export function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            width={235}
            height={111}
            alt="Studios Ghibli"
          />
        </a>
      </Link>
    </StyledHeader>
  )
}
