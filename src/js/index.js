import '../scss/main.scss'
import domready from 'domready'
import module from './module'

const fileName = 'index.js'
const helloFrom = fileName => console.log(`hello from ${fileName}!`)

domready(() => {
  helloFrom(fileName)
  helloFrom(module)
})
