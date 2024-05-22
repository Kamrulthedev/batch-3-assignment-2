import dotenv from 'dotenv';
dotenv.config()


export default{
    port: process.env.USER_PORT,
    database_url:process.env.DATABASE_URL
};