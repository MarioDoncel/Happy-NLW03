import express from 'express'
import path from 'path'
import hbs from 'handlebars'

import pages from './pages.js'
const app = express()

// CONFIGURANDO PASTA PUBLIC
app.use(express.static('public'))

// Localização PARA BUSCAR A PASTA VIEWS   e Template Engine
const __dirname = path.resolve();
app
    .set('views', path.join(__dirname, 'src/views'))
    .set('view engine', 'hbs')

// HABILITANDO REQ.BODY
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/', pages.index)
app.get('/orphanage', pages.orphanage)
app.get('/orphanages', pages.orphanages)
app.get('/create-orphanage', pages.createOrphanage)
app.post('/save-orphanage', pages.saveOrphanage)

const port = 5500
app.listen(port, () => console.log(`Servidor ativo na porta ${port}`))