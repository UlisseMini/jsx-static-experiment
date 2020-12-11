const fs = require('fs/promises')
const { basename } = require('path')
const ReactDOMServer = require('react-dom/server')

const outdir = 'dist'

// todo: Remove this function, find a simplier way
async function find (dir) {
  return (await fs.readdir(dir)).map(x => './' + dir + '/' + x)
}

// todo: clean this up, could buch shorter and idiomatic
(async function () {
  const pubPaths = await find('public')

  for (let i = 0; i < pubPaths.length; i++) {
    const path = pubPaths[i]
    await fs.copyFile(path, './' + outdir + '/' + basename(path))
  }

  const entryPoints = [].concat(await find('pages'))
  console.log('esbuild out:', outdir, 'entrypoints:', entryPoints)
  await require('esbuild').build({
    entryPoints: entryPoints,
    bundle: true,
    outdir: outdir,
    platform: 'node'
  })

  const paths = (await find(outdir)).filter(x => x.endsWith('.js'))
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]

    console.log('-----------------------', path, '----------------------')
    const Module = require(path)
    const Page = Module.default
    const html = ReactDOMServer.renderToStaticMarkup(Page())
    console.log(html)

    const fileName = path.slice(0, -3) + '.html'
    // todo: check error from writeFile here
    await fs.writeFile(fileName, html, 'utf8')
    console.log('Written to ' + fileName)
  }
})()
