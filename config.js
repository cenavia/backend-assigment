module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notesecret!',
    },

    mysql:{
        host: process.env.MYSQL_HOST || 'www.db4free.net',
        user: process.env.MYSQL_USER || 'docred',
        password: process.env.MYSQL_PASS || 'HftxPcIAT7e9A4Dn',
        database: process.env.MYSQL_DB || 'crm_docred',


    }
}