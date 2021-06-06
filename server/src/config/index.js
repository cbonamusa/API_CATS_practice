module.exports = {
    port: 8888,
    database: {
        user: 'admin',
        password: 'criscats',
        port: 27017,
        host: 'localhost',
        db: 'catsite'
    },
    mongourl() {
        const {user, password, port, host, db } = this.database;
        return `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`;
    }
}