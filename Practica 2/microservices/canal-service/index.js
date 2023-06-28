require('dotenv').config();


const { dbConnection } =  require('./src/database/config');

const db = async()=> {
        await dbConnection();

}
db();
const server = require("./src/app");


server.listen(process.env.PORT, ()=>{
    console.log(`canal Service started .... `)
})