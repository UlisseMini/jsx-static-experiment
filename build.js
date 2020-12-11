const fs = require('fs')
const { basename } = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const outdir = 'dist'

// todo: Remove this function, find a simplier way
function find(dir) {
	return new Promise((resolve, reject) => {
		fs.readdir(dir, {}, (err, files) => {
			if (err) {
				reject(err)
			}
			else {
				resolve(files.map(x => './'+dir +'/'+x))
			}
		})
	})
}

// todo: clean this up, could buch shorter and idiomatic
async function main() {
	const entryPoints = [].concat(await find('pages'))
	console.log('esbuild out:', outdir, 'entrypoints:', entryPoints)
	await require('esbuild').build({
		entryPoints: entryPoints,
		bundle: true,
		outdir: outdir,
		platform: 'node',
	})

	const paths = (await find(outdir)).filter(x => x.endsWith('.js'))
	paths.forEach(path => {
		console.log('-----------------------', path, '----------------------')
		const Module = require(path)
		const Page = Module.default
		const html = ReactDOMServer.renderToStaticMarkup(Page())
		console.log(html)

		const fileName = path.slice(0, -3) + '.html'
		// todo: check error from writeFile here
		fs.writeFile(fileName, html, 'utf8',
			(err) => console.log(err ? err : 'Written to ' + fileName))
	})


}

main()
