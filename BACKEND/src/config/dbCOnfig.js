import mongoose from 'mongoose'
import colors from 'colors'
import serverConfig from './serverConfig.js';

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(serverConfig.db_url)
        console.log(`connected to mongodb ${connect.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`error in Mongodb ${error}`.bgRed.white);
    }
};
export default dbConnection