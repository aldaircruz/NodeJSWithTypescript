import Mongoose = require('mongoose');

class DataAccess {
    public static mongooseInstance: any;
    public static mongooseConnection: Mongoose.Connection;

    public static connect(): Mongoose.Connection {
        if (this.mongooseInstance) { return this.mongooseInstance; }

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Conectado ao mongodb.');
        });

        this.mongooseInstance = Mongoose.connect(process.env.DB_CONNECTION_STRING || '');
        return this.mongooseInstance;
    }

    constructor() {
        DataAccess.connect();
    }

}

DataAccess.connect();
export = DataAccess;
