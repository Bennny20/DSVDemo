'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

module.exports ={
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER || 'localhost',
        user: SQL_USER || 'sa',
        password: SQL_PASSWORD || '123456',
        database: SQL_DATABASE || 'DSGAppraisalSoftwareX',
        options:{
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
}