import React from 'react'

import * as S from './Navbar.style'
import * as Icons from 'react-feather'

interface NavLinks {
  link: string
  title: string
}

const Navbar: React.FC<{ location: string }> = ({ location }) => {
  const [nav, setNav] = React.useState<boolean>(false)

  const ToggleNav = () => {
    setNav((prevState) => !prevState)
  }

  const NavLinks: NavLinks[] = [
    {
      link: '/#home',
      title: 'Home',
    },
    {
      link: '/#about',
      title: 'About',
    },
    {
      link: '/#projects',
      title: 'Projects',
    },
    {
      link: '/#contact',
      title: 'Contact',
    },
    {
      link: 'https://www.buymeacoffee.com/aryasoni98',
      title: 'BuyMeACoffee',
    },
  ]

  return (
    <>
      <S.NavMenuContainer className={nav ? '' : 'disabled'} onClick={ToggleNav}>
        <S.NavMenu>
          {NavLinks.map((link, index) => (
            <S.NavMenuLinks key={index} href={link.link} onClick={ToggleNav}>
              {link.title}
            </S.NavMenuLinks>
          ))}
        </S.NavMenu>
      </S.NavMenuContainer>
      <S.Nav>
        <S.NavContainer>
          <S.TerminalText>~/aryasoni/{location}</S.TerminalText>
          <S.NavLinks>
            {NavLinks.map((link, index) => (
              <S.NavLink key={index} href={link.link}>
                {link.title}
              </S.NavLink>
            ))}
          </S.NavLinks>
          <S.Toggle onClick={ToggleNav}>
            <Icons.Menu />
          </S.Toggle>
        </S.NavContainer>
      </S.Nav>
    </>
  )
}

export default Navbar
