import React from 'react'
import Head from '../components/Head.jsx'
import Navbar from '../components/Navbar.jsx'

const defaultTitle = 'Uli'

export default function Layout ({ title, children }) {
  return (
    <html>
      <Head>
        <title>{title || defaultTitle}</title>
      </Head>

      <body>
        <header>
          <Navbar />
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
