// import scss entry point
import '../scss/main.scss'

import module from './module'

const fileName = 'index.js'
const helloFrom = fileName => console.log(`hello from ${fileName}!`)

helloFrom(fileName)
helloFrom(module)
