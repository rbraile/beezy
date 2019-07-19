import React from 'react'
import Link from 'next/link'

import { HeaderContainer, Menu } from './styled'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Star Wars</h1>
      <Menu>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </Menu>
    </HeaderContainer>
  )
}

export default Header
