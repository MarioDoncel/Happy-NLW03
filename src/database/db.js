import Database from 'sqlite-async'
import path from 'path'

const __dirname = path.resolve();


function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            opening_on_weekends TEXT
        );
    `)
}

export default Database.open(__dirname + '/database.sqlite').then(execute)