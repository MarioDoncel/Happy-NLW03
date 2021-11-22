import db from './db.js'
import saveOrphanage from './saveOrphanage.js';
import fakedata from './fakedata.js';

const [fake1, fake2] = fakedata

db.then( async (db)=> {
    await saveOrphanage(db, fake1)

    const selectedOrphanages = await db.all(`
        SELECT * FROM orphanages
        `)
    

    const orphanage1 = await db.all(`
        SELECT * FROM orphanages WHERE id = 1
    `)
    

    await db.run(`
    DELETE FROM orphanages WHERE id = 3;
    `)
})