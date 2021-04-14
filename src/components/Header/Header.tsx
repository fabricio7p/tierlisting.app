import Link from 'next/link'
import { SvgHelpCircle, SvgLogo, SvgMoon } from 'assets'

import { S } from './Header.styles'

export const Header = () => {
  return (
    <S.Container>
      <Link href="#">
        <S.Logo.Container>
          <SvgLogo />
          <S.Logo.Text>
            tierlist<b>.app</b>
          </S.Logo.Text>
        </S.Logo.Container>
      </Link>
      <S.Navigation.Container>
        <S.Navigation.Button>
          <SvgMoon />
        </S.Navigation.Button>
        <S.Navigation.Button>
          <SvgHelpCircle />
        </S.Navigation.Button>
      </S.Navigation.Container>
    </S.Container>
  )
}
