import mongoose from 'mongoose'

const connection = {}

async function DBConnect(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    connection.isConnected = db.connection[0];
    connection.readyState;
}

export default DBConnect;