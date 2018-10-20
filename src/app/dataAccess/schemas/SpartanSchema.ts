import DataAccess = require('./../../dataAccess/DataAccess');
import ISpartanModel = require('./../../model/interfaces/SpartanModel');

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class SpartanSchema {

    static get schema() {
        return new mongoose.Schema({
            amountPeopleKilled: {
                required: true,
                type: Number,
            },
            folk: {
                required: true,
                type: String,
            },
            name: {
                required: true,
                type: String,
            },
        });
    }
}
export = mongooseConnection.model<ISpartanModel>('Spartan', SpartanSchema.schema);
