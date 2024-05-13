const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';


const dbName = 'contact';


const client = new MongoClient(uri);

async function main() {
    try {
        // Connect client to server
        await client.connect();
        console.log('Connected to the MongoDB server');

        // Get the db
        const db = client.db(dbName);

        // collection
        await db.createCollection('contactlist');
        console.log('Collection "contactlist" created successfully');

    } finally {
        // Close
        await client.close();
    }
}

main().catch(console.error);
