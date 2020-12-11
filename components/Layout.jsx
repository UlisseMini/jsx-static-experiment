import React from 'react'
import Head from '../components/Head.jsx'

const defaultTitle = 'Uli'

export default function Layout ({ title, children }) {
  return (
    <html>
      <Head>
        <title>{title || defaultTitle}</title>
      </Head>

      <body>
        <header>
          <a href='/'>
            <img src='/profile.png' alt='cute seal' className='round' />
          </a>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
