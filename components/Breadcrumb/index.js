import React from 'react'
import Link from 'next/link'
import { Menu } from './styled'

const Breadcrumb = ({ page }) => {
  return (
    <Menu>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {page && (
          <li>
            <span>></span>
            <strong>{page}</strong>
          </li>
        )}
      </ul>
    </Menu>
  )
}

export default Breadcrumb
