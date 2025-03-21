import mongoose from "mongoose";


type connectionObject = {
    isConncted?: number
}

const connection: connectionObject = {}

async function dbConnect(): Promise<void>{
    if (connection.isConncted){
        console.log("already connect to databsae")
        return
    }


    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || '', {})
        console.log(db)

        connection.isConncted = db.connections[0].readyState;
        console.log("connect db successfully");
    } catch (error) {
        
        console.log("Database connection faild", error)
        process.exit(1)
    }
}

export default dbConnect;