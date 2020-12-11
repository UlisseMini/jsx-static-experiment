import React from 'react'

export default function Head ({ children }) {
  return (
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='/styles.css' />
      {children}
    </head>
  )
}
