import dontenv from 'dotenv'
dontenv.config();

export default{
    port:process.env.PORT || 3000,
    db_url:process.env.DB_URL ,
    jwt_secret:process.env.JWT_SECRET
}