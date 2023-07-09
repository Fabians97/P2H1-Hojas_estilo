import pg from 'pg';
const {Pool} = pg;

let localPoolConfig = {
    user:'postgres',
    password:'885522',
    host:'localhost',
    port:'5432',
    database:'p3h1_javascript'
};

const poolConfig = process.env.DATABASE_URL ? {
    connectionstring:process.env.DATABASE_URL,ssl:{
        rejectUnauthorized:false
    }
}:localPoolConfig;

const pool = new Pool(poolConfig);
export default pool;