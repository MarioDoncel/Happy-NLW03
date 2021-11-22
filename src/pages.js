import Database from './database/db.js'
import saveOrphanage from './database/saveOrphanage.js'

const db = await Database

const pages =  {
    index(req, res) {
        res.render('index')
    },
    async orphanage(req, res) {
        const id = req.query.id

        try {
            const [orphanage] = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            orphanage.images = orphanage.images.split(',')//.map(image => image.replace(''))
            orphanage.mainImage = orphanage.images[0]
            orphanage.opening_on_weekends = Number(orphanage.opening_on_weekends)
            res.render('orphanage', {orphanage})
        } catch (error) {
            console.log(error)
            res.send('DATABASE ERROR')
        }
    },
    async orphanages(req, res) {
        try {
            const orphanages = await db.all(`SELECT * FROM orphanages`)
            res.render('orphanages', {orphanages})
        } catch (error) {
            console.log(error)
            res.send('DATABASE ERROR')
        }
    },
    createOrphanage(req, res) {
        res.render('create-orphanage')
    },
    async saveOrphanage(req, res) {
        const data = req.body
        
        if(Object.values(data).includes('')) res.send('Todos os campos devem ser preenchidos.')

        try {
            saveOrphanage(db, data)
            res.render('create-orphanage')
        } catch (error) {
            console.log(error)
            res.send('DATABASE ERROR')
        } 
    },
}

export default pages