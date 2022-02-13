const { connect } = require('mongoose');

const connectDB = async () => {
    const db = await connect(process.env.DB_URL);
    console.log(`Mongo DB are connected db_name:${db.connection.name} on host ${db.connection.host} on port ${db.connection.port}`.green.italic.bold);
}

module.exports = connectDB;