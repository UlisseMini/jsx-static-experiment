import React from 'react'
import Layout from '../components/Layout.jsx'

export default function Index () {
  return (
    <Layout>
      <section id="about">
        <h1>About</h1>
        <p>
          I'm Ulisse Mini, I'm 16 and an aspring software developer, AI researcher and entrepreneur.
        </p>

        <p>
          I'm currently teaching myself linear algebra, multivariable calculus and probability theory.
          <br />
          At the same time I'm trying to improve my programming a bit,
          I plan to make interactive AI demonstrations on this site, things like <a href="https://blog.otoro.net/2015/05/13/neural-slime-volleyball-evolution-demo/">slime volleyball</a> 

        </p>
        <p>
          I'm interested in math, artifical intellgience and business.
        </p>
      </section>

      <section id="posts">
        <h1>Posts</h1>
        <i>No posts yet</i>
      </section>
    </Layout>
  )
}
