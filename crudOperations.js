const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbName = 'contact';


const client = new MongoClient(uri);

async function main() {
    try {
       
        await client.connect();
        console.log('Connected to the MongoDB server');

       
        const db = client.db(dbName);

        
        const collection = db.collection('contactlist');

        // Insertion
        const insertResult = await collection.insertMany([
            { lastName: 'Ben', firstName: 'Moris', email: 'ben@gmail.com', age: 26 },
            { lastName: 'Kefi', firstName: 'Seif', email: 'kefi@gmail.com', age: 15 },
            { lastName: 'Emilie', firstName: 'brouge', email: 'emilie.b@gmail.com', age: 40 },
            { lastName: 'Alex', firstName: 'brown', age: 4 },
            { lastName: 'Denzel', firstName: 'Washington', age: 3 }
        ]);
        console.log(`${insertResult.insertedCount} documents inserted`);



    } finally {
        
        await client.close();
    }
}

main().catch(console.error);
