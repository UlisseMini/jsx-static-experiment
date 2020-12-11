import React from 'react'

const defaultTitle = 'Uli'

export default function Layout ({ title, children }) {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/styles.css' />
        <title>{title || defaultTitle}</title>
      </head>

      <body>
        <header>
          <a href='/'>
            <img src='/profile.png' alt='cute seal' className='round' />
          </a>
          <h1>About</h1>
        </header>
        <main>
          {children}
        </main>
      </body>

    </html>
  )
}
