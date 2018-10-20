import DataAccess = require('./../../dataAccess/DataAccess');
import ISpartanModel = require('./../../model/interfaces/SpartanModel');

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class SpartanSchema {

    static get schema() {
        const schema = new mongoose.Schema({
           name: {
               type: String,
               required: true,
           },
           folk: {
               type: String,
               required: true,
           },
           amountPeopleKilled: {
               type: Number,
               required: true,
           },
        });

        return schema;
    }
}
const schema = mongooseConnection.model<ISpartanModel>('Spartan', SpartanSchema.schema);
export = schema;
